import { Octokit } from '@octokit/rest'

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

// Helper functions for common GitHub operations
export async function createRepository(name: string, description: string, isPrivate: boolean = false) {
  const client = await getUncachableGitHubClient();
  
  try {
    const response = await client.rest.repos.createForAuthenticatedUser({
      name,
      description,
      private: isPrivate,
      auto_init: true
    });
    
    return response.data;
  } catch (error) {
    console.error('Error creating repository:', error);
    throw error;
  }
}

export async function getUserInfo() {
  const client = await getUncachableGitHubClient();
  
  try {
    const response = await client.rest.users.getAuthenticated();
    return response.data;
  } catch (error) {
    console.error('Error getting user info:', error);
    throw error;
  }
}

export async function listRepositories() {
  const client = await getUncachableGitHubClient();
  
  try {
    const response = await client.rest.repos.listForAuthenticatedUser({
      sort: 'updated',
      per_page: 30
    });
    return response.data;
  } catch (error) {
    console.error('Error listing repositories:', error);
    throw error;
  }
}
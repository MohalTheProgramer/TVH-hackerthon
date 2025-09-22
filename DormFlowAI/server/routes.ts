import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUserInfo, listRepositories, createRepository } from "./github";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API routes
  app.get("/api/github/user", async (req, res) => {
    try {
      const user = await getUserInfo();
      res.json(user);
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
      res.status(500).json({ error: "Failed to fetch GitHub user info" });
    }
  });

  app.get("/api/github/repositories", async (req, res) => {
    try {
      const repos = await listRepositories();
      res.json(repos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
      res.status(500).json({ error: "Failed to fetch repositories" });
    }
  });

  app.post("/api/github/repositories", async (req, res) => {
    try {
      const { name, description, isPrivate } = req.body;
      
      if (!name) {
        return res.status(400).json({ error: "Repository name is required" });
      }
      
      const repo = await createRepository(name, description, isPrivate);
      res.json(repo);
    } catch (error) {
      console.error("Error creating repository:", error);
      res.status(500).json({ error: "Failed to create repository" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";

const sql = neon(
  "postgresql://clearwalletdb_owner:t3YlZ0LHAfdN@ep-shiny-darkness-a8wvro9h.eastus2.azure.neon.tech/clearwalletdb?sslmode=require"
);

export const db = drizzle(sql, { schema });

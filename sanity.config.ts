import { defineConfig } from "sanity"; 
import { deskTool } from "sanity/desk";
//import schemas from "./sanity/schemas";

const config = defineConfig({
    // projectId: process.env.SANITY_PROJECT_ID, 
    projectId: "81ql0u2a",
    dataset: "production",
    title: "linen-moose",
    apiVersion: "2023-03-09",
    basePath: "/admin",
    plugins: [deskTool()]
    //schema: { types: schemas },
});

export default config;
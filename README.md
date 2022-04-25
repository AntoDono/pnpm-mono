### Example of a monorepo using PNPM

## pnpm-workspace.yaml
This is the workspaces of the pnpm project. By writing the path of any folder/directories, you are linking the packages so other scripts can use those pacakges.

## packages/
This is the directory that should contain all projects and pacakges. Each project should have the name `@mono_repo_name/the_project_name`, this allows for easier reference in the main script.

## installations
To install any libraries, use pnpm install or the dependencies wouldn't be linked.
In addition, when installing all dependencies for the monorepo, use `pnpm install recursive`, this installs all dependencies for every project in side packages/.
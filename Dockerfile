# --------------- STAGE 1: Develop ---------------
FROM olliecaine/ui-component-library:dev as stage-develop

# Set environment variable for GitHub token
ENV MY_GITHUB_TOKEN_CLASSIC=${MY_GITHUB_TOKEN_CLASSIC}

# Expose the default Playwright port
# EXPOSE 8585

# Expose the Storybook port
# EXPOSE 6005
# --------------- STAGE 1: Develop ---------------
FROM olliecaine/ui-component-library:dependencies-1 as stage-develop

# Expose the default Playwright port
# EXPOSE 8585

# Expose the Storybook port
# EXPOSE 6005
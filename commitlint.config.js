module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) => message.includes('[skip ci]'),
    (message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message),
  ],
};

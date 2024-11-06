/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'chore', scope: 'deps', release: 'patch' },
          { type: 'docs', scope: 'readme', release: 'patch' },
          { scope: 'no-release', release: false },
          { scope: 'release-patch', release: 'patch' },
          { scope: 'release-minor', release: 'minor' },
          { scope: 'release-major', release: 'major' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};

export default config;

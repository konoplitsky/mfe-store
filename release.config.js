/**
 * @type {import('semantic-release').GlobalConfig}
 */

const noteKeywords = ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']

const releaseRules = [
    // Hidden general semver releases
    { type: 'major', release: 'major' },
    { type: 'minor', release: 'minor' },
    { type: 'patch', release: 'patch' },
    // Main changes
    { type: 'fix', release: 'patch' },
    { type: 'feat', release: 'patch' },
    {
        type: 'feat',
        scope: 'minor',
        release: 'minor',
    },
    {
        type: 'feat',
        scope: 'major',
        release: 'major',
    },
    { type: 'styles', release: 'patch' },
    // Special changes
    { type: 'chore', release: false },
    { type: 'docs', release: false },
    { type: 'docs', scope: 'readme', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'tests', release: false },
]


export default {
    branches: ["release"],
    npmPublish: false,
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                parserOpts: { noteKeywords: noteKeywords },
                releaseRules: releaseRules,

            },
        ],
        "@semantic-release/release-notes-generator",

        [
            "@semantic-release/npm",
            {
                npmPublish: true
            }
        ],

        [
            "@semantic-release/git",
            {
                assets: ["package.json", "package-lock.json"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],

        "@semantic-release/github"
    ]
};

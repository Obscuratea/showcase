export interface Social {
  name: string;
  description: string;
  url: string;
  /** Shown under the description. */
  handle: string;
}

// Add or reorder entries here; the Social page renders this list as-is.
export const socials: Social[] = [
  {
    name: 'GitHub',
    description: 'Source code, releases and issue trackers.',
    url: 'https://github.com/Obscuratea',
    handle: 'github.com/Obscuratea',
  },
  {
    name: 'YouTube',
    description: 'Video channel.',
    url: 'https://www.youtube.com/@joshiewoah',
    handle: 'youtube.com/@joshiewoah',
  },
  {
    name: 'Instagram',
    description: 'Photo and video profile.',
    url: 'https://www.instagram.com/joshiewoah/',
    handle: 'instagram.com/joshiewoah',
  },
  {
    name: 'Discord',
    description: 'Community server.',
    url: 'https://discord.gg/uqV26sCQFq',
    handle: 'discord.gg/uqV26sCQFq',
  },
  {
    name: 'Ko-fi',
    description: 'Funds development of the projects.',
    url: 'https://ko-fi.com/obscuratea',
    handle: 'ko-fi.com/obscuratea',
  },
  {
    name: 'Patreon',
    description: 'Funds development of the projects.',
    url: 'https://patreon.com/Obscuratea',
    handle: 'patreon.com/Obscuratea',
  },
];

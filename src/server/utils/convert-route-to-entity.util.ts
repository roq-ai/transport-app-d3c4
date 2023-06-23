const mapping: Record<string, string> = {
  jobs: 'job',
  organizations: 'organization',
  'truck-drivers': 'truck_driver',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

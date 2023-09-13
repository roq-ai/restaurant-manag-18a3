const mapping: Record<string, string> = {
  managers: 'manager',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

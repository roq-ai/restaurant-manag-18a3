interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage restaurant profile',
    'Invite or remove Managers',
    'View list of all Managers',
    'View list of all owned restaurants',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e54f1971-6a12-40e3-ab8a-a5f630a01f92',
};

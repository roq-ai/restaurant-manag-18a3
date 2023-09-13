import { ManagerInterface } from 'interfaces/manager';
import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  manager?: ManagerInterface[];
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    manager?: number;
    menu?: number;
    reservation?: number;
    review?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

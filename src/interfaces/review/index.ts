import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  restaurant_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  restaurant_id?: string;
  user_id?: string;
}

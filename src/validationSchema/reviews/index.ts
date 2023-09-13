import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

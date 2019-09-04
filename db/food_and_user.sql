SELECT f.food_name, p.person_name, f.user_id FROM favorite_foods f
join people p ON P.person_id = f.user_id

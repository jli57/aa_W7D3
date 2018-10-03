filtered_guests = @guests.select do |guest|
  ( guest["age"] >= 40 && guest["age"] <= 50 )
end

json.array! filtered_guests.each do |guest|
  json.extract! guest, :name, :age, :favorite_color
end

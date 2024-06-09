export const seasons = ["WINTER", "SPRING", "SUMMER", "FALL"]
export const formats = ["TV","TV_SHORT","OVA", "ONA" ,"MOVIE" ,"SPECIAL" ,"MUSIC"]
export const sorts = ["POPULARITY_DESC","POPULARITY", "TRENDING_DESC" ,"TRENDING", "UPDATED_AT_DESC", "UPDATED_AT" ,"START_DATE_DESC" ,"START_DATE", "END_DATE_DESC", "END_DATE", "FAVOURITES_DESC" ,"FAVOURITES" ,"SCORE_DESC", "SCORE", "EPISODES_DESC" ,"EPISODES"]
export const genres = ["Action", "Adventure", "Cars", "Comedy" ,"Drama" ,"Fantasy", "Horror", "Mahou Shoujo" ,"Mecha", "Music", "Mystery" ,"Psychological", "Romance" ,"Sci-Fi" ,"Slice of Life" ,"Sports", "Supernatural", "Thriller"]
export const status = ["RELEASING" ,"NOT_YET_RELEASED" ,"FINISHED" ,"CANCELLED" ,"HIATUS"]

export const details = [{name:"totalEpisodes",unit:"eps"},{name:"du",unit:""}]

export function minsToHrs(min){
  if (min>60){
    return Math.floor(min/60) + " hrs " + min%60 + " mins"
  }else if(min<60){
    return min + " mins"
  }else if(!min){
    return "? mins"
  }
}

export const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]

export const showDate = (date)=>{
  if(date.day && date.month && date.year ){
    return `${date.day} ${months[date.month-1]} ${date.year}`;
  }
  return "?"
}
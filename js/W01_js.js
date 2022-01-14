function date_ddmmmyy(date)
{
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getYear();
  if(y >= 2000)
  {
    y -= 2000;
  }

  if(y >= 100)
  {
    y -= 100;
  }
  let mmm = 
    ( 1==m)?'Jan':( 2==m)?'Feb':(3==m)?'Mar':
    ( 4==m)?'Apr':( 5==m)?'May':(6==m)?'Jun':
    ( 7==m)?'Jul':( 8==m)?'Aug':(9==m)?'Sep':
    (10==m)?'Oct':(11==m)?'Nov':'Dec';

  return "" +
    (d<10?"0"+d:d) + "-" +
    mmm + "-" +
    (y<10?"0"+y:y);
}

function date_lastmodified()
{
  let lmd = document.lastModified;
  let s   = "Unknown";
  let d1;

  if(0 != (d1=Date.parse(lmd)))
  {
    s = "" + date_ddmmmyy(new Date(d1));
  }

  return s;
}

document.write( 
  "Last Updated " + 
  date_lastmodified() );


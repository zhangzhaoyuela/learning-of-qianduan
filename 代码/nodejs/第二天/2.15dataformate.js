function dataFormat(dtStr)
{
    const dt =new Date (dtStr);
    const y = dt.getFullYear();
    const m =padZero(dt.getMonth()+1);
    const d =padZero(dt.getDate());
    const hh =padZero(dt.getHours());
    const mm =padZero(dt.getMinutes());
    const ss=padZero(dt.getSeconds());

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`; 
}
function padZero(s)
{
    if(s<9) return '0'+s;
    else return s;
}

module.exports =
{
    dataFormat
};
export default function Abbrev(num) {
    if (!num || isNaN(num)) return "0";
    if (typeof num === "string") num = parseInt(num);
    if (num < 1000) return num.toString();
    const decPlaces = Math.pow(10, 1);
    const abbrev = ["K", "M", "B", "T"];

    let dat = "";

    for (let i = abbrev.length - 1; i >= 0; i--) {
        const size = Math.pow(10, (i + 1) * 3);
        if (size <= num) {
            num = Math.round((num * decPlaces) / size) / decPlaces;
            if (num == 1000 && i < abbrev.length - 1) {
                num = 1;
                i++;
            }
            dat = `${num}${abbrev[i]}`;
            break;
        }
    }

    return dat;
}

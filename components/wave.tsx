export function Wave() {
  return <div className="wave-art" aria-hidden="true"><svg viewBox="0 0 1440 490" preserveAspectRatio="none">
    <defs>
      <linearGradient id="wave-back" x1="0" y1="150" x2="300" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#317eff"/><stop offset=".52" stopColor="#244bdc"/><stop offset="1" stopColor="#102284" stopOpacity="0"/></linearGradient>
      <linearGradient id="wave-main" x1="0" y1="100" x2="0" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="#b2f8ff"/><stop offset=".12" stopColor="#5cd9ff"/><stop offset=".47" stopColor="#2482ff"/><stop offset=".78" stopColor="#1354ef"/><stop offset="1" stopColor="#558bff"/></linearGradient>
      <linearGradient id="wave-fold" x1="0" y1="250" x2="0" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="#2568ff"/><stop offset=".5" stopColor="#142fb4"/><stop offset="1" stopColor="#7fbcff"/></linearGradient>
      <linearGradient id="wave-edge"><stop stopColor="#6ddcff"/><stop offset=".24" stopColor="#ceeaff"/><stop offset=".47" stopColor="#b9faff"/><stop offset=".7" stopColor="#58a8ff"/><stop offset="1" stopColor="#b7f1ff"/></linearGradient>
      <linearGradient id="wave-lower" x1="0" y1="250" x2="0" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#2240b0" stopOpacity=".7"/><stop offset="1" stopColor="#101026" stopOpacity="0"/></linearGradient>
      <filter id="wave-glow" x="-20%" y="-80%" width="140%" height="260%"><feGaussianBlur stdDeviation="24"/></filter>
      <filter id="edge-glow"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <path d="M-80 174C65 66 128 124 244 207S390 302 519 231C668 148 698 112 803 143C930 181 998 332 1123 323C1244 313 1292 224 1520 180L1520 338C1342 380 1274 515 1120 459C987 413 909 273 799 269C679 265 608 367 512 395C386 433 352 310 239 308C100 306 50 258-80 348Z" fill="#1256fa" opacity=".48" filter="url(#wave-glow)"/>
    <path d="M-80 190C65 82 128 140 244 223S390 318 519 247C668 164 698 128 803 159C930 197 998 348 1123 339C1244 329 1292 240 1520 196L1520 348C1342 390 1274 485 1120 429C987 383 909 243 799 239C679 235 608 337 512 365C386 403 352 280 239 278C100 276 50 228-80 318Z" fill="url(#wave-back)"/>
    <path d="M-80 158C65 50 128 108 244 191S390 286 519 215C668 132 698 96 803 127C930 165 998 316 1123 307C1244 297 1292 208 1520 164L1520 303C1342 345 1274 480 1120 424C987 378 909 238 799 234C679 230 608 332 512 360C386 398 352 275 239 273C100 271 50 223-80 313Z" fill="url(#wave-main)"/>
    <path d="M-80 299C100 209 178 271 269 285C394 308 416 278 522 254C657 224 713 182 805 211C931 250 991 384 1120 424C990 392 924 276 796 253C676 230 608 332 512 360C386 398 352 275 239 273C100 271 50 223-80 313Z" fill="url(#wave-fold)"/>
    <path d="M-80 158C65 50 128 108 244 191S390 286 519 215C668 132 698 96 803 127C930 165 998 316 1123 307C1244 297 1292 208 1520 164" stroke="url(#wave-edge)" strokeWidth="4" fill="none" opacity=".75" filter="url(#edge-glow)"/>
    <path d="M-80 158C65 50 128 108 244 191S390 286 519 215C668 132 698 96 803 127C930 165 998 316 1123 307C1244 297 1292 208 1520 164" stroke="url(#wave-edge)" strokeWidth="1.7" fill="none"/>
    <path d="M-80 313C50 223 100 271 239 273C352 275 386 398 512 360C608 332 679 230 799 234C909 238 987 378 1120 424C1274 480 1342 345 1520 303L1520 490H-80Z" fill="url(#wave-lower)"/>
  </svg><div className="wave-shine wave-shine-one"/><div className="wave-shine wave-shine-two"/></div>;
}

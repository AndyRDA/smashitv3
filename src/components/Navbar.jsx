import { createSignal } from "solid-js";
import './Navbar.css'


export default function Navbar(){
  const [isOpen, setIsOpen] = createSignal(false);


    function toggleNav() {
        isOpen() ? setIsOpen(false) : setIsOpen(true);
    }

  return(
    <nav>
      <div className="logo__container">
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.614136 475C13.2321 218.754 218.754 13.2321 475 0.614136V100.769C274 113.164 113.164 274 100.769 475H0.614136Z"
            fill="#20D0EE"
          />
          <path
            d="M0.614136 525C13.2321 781.246 218.754 986.768 475 999.386V899.231C274 886.836 113.164 726 100.769 525H0.614136Z"
            fill="#20D0EE"
          />
          <path
            d="M899.231 525C886.836 726 726 886.836 525 899.231V999.386C781.246 986.768 986.768 781.246 999.386 525H899.231Z"
            fill="#20D0EE"
          />
          <path
            d="M999.386 475C986.768 218.754 781.246 13.2321 525 0.614136V100.769C726 113.164 886.836 274 899.231 475H999.386Z"
            fill="#20D0EE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M500 850C693.3 850 850 693.3 850 500C850 306.7 693.3 150 500 150C306.7 150 150 306.7 150 500C150 693.3 306.7 850 500 850ZM500.481 476.687L437.669 411.889L222.61 617.665L205.327 599.601L427.205 387.301C433.361 381.41 443.119 381.593 449.05 387.712L518.487 459.345L570.234 409.506C576.265 403.697 585.82 403.728 591.813 409.578L786.676 599.777L769.214 617.668L580.942 433.902L526.868 485.982L517.909 494.667L517.881 494.638L490.045 521.448L516.529 547.489L529.45 534.869L529.328 534.74L538.329 526.196L570.182 495.085C576.179 489.227 585.747 489.199 591.778 495.022L700.175 599.681L682.81 617.666L581.05 519.415L564.55 535.532L626.172 600.452L608.04 617.663L546.663 553.003L527.338 571.879C521.301 577.775 511.656 577.759 505.64 571.843L434.34 501.734L312.026 617.663L294.829 599.518L423.799 477.28C429.858 471.538 439.377 471.625 445.329 477.478L472.213 503.913L500.481 476.687ZM423.771 548.36C429.767 542.608 439.233 542.608 445.229 548.36L498.674 599.623L481.368 617.665L434.5 572.71L387.632 617.665L370.326 599.623L423.771 548.36Z"
            fill="#20D0EE"
          />
        </svg>
        <svg class="logo_text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" zoomAndPan="magnify" viewBox="0 0 900 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/></defs><g fill="#20cfee" fill-opacity="1"><g transform="translate(29.182921, 247.721562)"><g><path d="M 33.03125 -33.28125 L 31.453125 -30 C 31.453125 -27.664062 34.738281 -25.425781 41.3125 -23.28125 C 47.894531 -21.144531 55.117188 -20.078125 62.984375 -20.078125 C 70.847656 -20.078125 79.5 -21.25 88.9375 -23.59375 C 98.375 -25.9375 106.578125 -28.800781 113.546875 -32.1875 C 120.523438 -35.570312 126.289062 -39.117188 130.84375 -42.828125 C 135.40625 -46.535156 137.6875 -49.765625 137.6875 -52.515625 C 137.6875 -55.984375 133.65625 -59.207031 125.59375 -62.1875 C 117.53125 -65.175781 105.8125 -68.460938 90.4375 -72.046875 C 75.070312 -75.640625 63.820312 -80.175781 56.6875 -85.65625 C 49.550781 -91.144531 45.984375 -97.820312 45.984375 -105.6875 C 45.984375 -113.550781 48.804688 -121.070312 54.453125 -128.25 C 60.097656 -135.425781 67.457031 -141.796875 76.53125 -147.359375 C 85.601562 -152.929688 95.503906 -157.894531 106.234375 -162.25 C 128.410156 -171.207031 148.976562 -175.6875 167.9375 -175.6875 C 175.195312 -175.6875 181.609375 -175.039062 187.171875 -173.75 C 197.828125 -171.25 203.15625 -167.941406 203.15625 -163.828125 C 203.15625 -159.710938 202.789062 -156.90625 202.0625 -155.40625 C 201.332031 -153.914062 200.742188 -152.929688 200.296875 -152.453125 C 199.859375 -151.972656 199.296875 -151.488281 198.609375 -151 C 197.921875 -150.519531 197.414062 -150.15625 197.09375 -149.90625 C 193.550781 -146.925781 183.832031 -145.070312 167.9375 -144.34375 C 162.457031 -144.101562 159.472656 -143.820312 158.984375 -143.5 C 158.503906 -143.175781 158.082031 -143.015625 157.71875 -143.015625 C 157.351562 -143.015625 156.925781 -143.335938 156.4375 -143.984375 C 155.957031 -144.628906 155.71875 -145.675781 155.71875 -147.125 C 155.71875 -148.582031 157.289062 -151.242188 160.4375 -155.109375 C 150.59375 -154.546875 140.082031 -152.285156 128.90625 -148.328125 C 117.738281 -144.378906 108.039062 -139.925781 99.8125 -134.96875 C 91.59375 -130.007812 84.738281 -125.128906 79.25 -120.328125 C 73.769531 -115.523438 71.03125 -112.132812 71.03125 -110.15625 C 71.03125 -108.1875 71.632812 -106.554688 72.84375 -105.265625 C 76.226562 -101.640625 85.625 -97.847656 101.03125 -93.890625 C 117 -89.773438 127.644531 -86.46875 132.96875 -83.96875 C 138.289062 -81.46875 142.707031 -79.085938 146.21875 -76.828125 C 149.726562 -74.566406 152.53125 -72.269531 154.625 -69.9375 C 159.550781 -64.289062 162.015625 -58.5625 162.015625 -52.75 C 162.015625 -46.945312 160.457031 -41.503906 157.34375 -36.421875 C 154.238281 -31.335938 149.5625 -26.414062 143.3125 -21.65625 C 137.0625 -16.894531 129.703125 -12.660156 121.234375 -8.953125 C 102.679688 -0.640625 80.582031 3.515625 54.9375 3.515625 C 36.21875 3.515625 24.273438 -1.445312 19.109375 -11.375 C 17.742188 -13.875 17.0625 -16.472656 17.0625 -19.171875 C 17.0625 -21.878906 17.6875 -24.320312 18.9375 -26.5 C 20.1875 -28.675781 21.695312 -30.328125 23.46875 -31.453125 C 26.9375 -33.628906 29.394531 -34.71875 30.84375 -34.71875 C 32.300781 -34.71875 33.03125 -34.238281 33.03125 -33.28125 Z M 33.03125 -33.28125 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(194.813959, 247.721562)"><g><path d="M 7.5 0.71875 L 1.578125 0.484375 L -0.609375 0.484375 C -1.410156 0.242188 -2.273438 -0.238281 -3.203125 -0.96875 C -4.128906 -1.695312 -4.832031 -2.222656 -5.3125 -2.546875 C -5.800781 -2.867188 -6.046875 -3.453125 -6.046875 -4.296875 C -6.046875 -5.140625 -5.722656 -6.613281 -5.078125 -8.71875 C 10.648438 -43.320312 25.851562 -70.988281 40.53125 -91.71875 C 42.144531 -93.976562 44.742188 -95.691406 48.328125 -96.859375 C 51.921875 -98.023438 55.410156 -98.609375 58.796875 -98.609375 C 60.816406 -98.609375 61.828125 -97.035156 61.828125 -93.890625 C 61.828125 -93.003906 61.503906 -91.8125 60.859375 -90.3125 C 60.210938 -88.820312 58.597656 -86.382812 56.015625 -83 C 53.441406 -79.613281 50.378906 -75.742188 46.828125 -71.390625 C 43.273438 -67.035156 41.257812 -64.535156 40.78125 -63.890625 C 51.820312 -75.335938 61.800781 -83.863281 70.71875 -89.46875 C 79.632812 -95.082031 86.085938 -97.890625 90.078125 -97.890625 C 94.066406 -97.890625 97.128906 -96.738281 99.265625 -94.4375 C 101.410156 -92.132812 102.484375 -89.671875 102.484375 -87.046875 C 102.484375 -84.429688 102.300781 -82.253906 101.9375 -80.515625 C 101.570312 -78.785156 100.90625 -76.972656 99.9375 -75.078125 C 98.96875 -73.179688 98.140625 -71.566406 97.453125 -70.234375 C 96.773438 -68.898438 95.628906 -67.164062 94.015625 -65.03125 C 92.398438 -62.894531 91.289062 -61.421875 90.6875 -60.609375 C 90.082031 -59.804688 88.832031 -58.273438 86.9375 -56.015625 C 85.039062 -53.753906 84.007812 -52.503906 83.84375 -52.265625 C 86.101562 -54.523438 89.25 -57.875 93.28125 -62.3125 C 97.320312 -66.75 100.734375 -70.457031 103.515625 -73.4375 C 106.296875 -76.425781 109.78125 -79.796875 113.96875 -83.546875 C 118.164062 -87.296875 122.082031 -90.34375 125.71875 -92.6875 C 134.425781 -98.164062 143.257812 -100.90625 152.21875 -100.90625 C 155.28125 -100.90625 157.859375 -99.9375 159.953125 -98 C 162.046875 -96.070312 163.09375 -93.753906 163.09375 -91.046875 C 163.09375 -88.347656 159.828125 -81.894531 153.296875 -71.6875 C 146.765625 -61.488281 140.25 -51.242188 133.75 -40.953125 C 127.257812 -30.671875 124.015625 -24.195312 124.015625 -21.53125 C 124.015625 -17.820312 124.703125 -15.625 126.078125 -14.9375 C 127.453125 -14.257812 129.101562 -14 131.03125 -14.15625 C 132.96875 -14.3125 135.691406 -15.5625 139.203125 -17.90625 C 142.710938 -20.25 145.835938 -22.671875 148.578125 -25.171875 C 153.015625 -29.203125 157.128906 -33.113281 160.921875 -36.90625 C 161.722656 -37.632812 162.609375 -38 163.578125 -38 C 165.117188 -38 166.046875 -36.828125 166.359375 -34.484375 C 166.679688 -32.140625 166.84375 -29.71875 166.84375 -27.21875 C 166.84375 -24.71875 166.601562 -22.984375 166.125 -22.015625 C 163.78125 -17.503906 158.613281 -11.976562 150.625 -5.4375 C 142.644531 1.09375 134.988281 4.359375 127.65625 4.359375 C 126.757812 4.359375 126.113281 4.316406 125.71875 4.234375 C 117.40625 3.429688 111.65625 1.15625 108.46875 -2.59375 C 105.28125 -6.351562 103.6875 -10.8125 103.6875 -15.96875 C 103.6875 -21.132812 105.441406 -27.382812 108.953125 -34.71875 C 112.460938 -42.0625 116.3125 -48.71875 120.5 -54.6875 C 124.695312 -60.65625 128.550781 -66.039062 132.0625 -70.84375 C 135.570312 -75.644531 137.328125 -78.242188 137.328125 -78.640625 C 137.328125 -79.046875 137.003906 -79.25 136.359375 -79.25 C 133.859375 -79.25 128.289062 -75.21875 119.65625 -67.15625 C 104.894531 -53.363281 92.148438 -40.050781 81.421875 -27.21875 C 78.597656 -23.832031 71.90625 -15.242188 61.34375 -1.453125 C 60.132812 0.160156 58.21875 0.96875 55.59375 0.96875 C 52.976562 0.96875 50.253906 0.460938 47.421875 -0.546875 C 44.597656 -1.554688 43.1875 -2.867188 43.1875 -4.484375 C 43.1875 -5.285156 49.597656 -16.59375 62.421875 -38.40625 C 75.253906 -60.226562 81.671875 -72.128906 81.671875 -74.109375 C 81.671875 -76.085938 80.476562 -77.078125 78.09375 -77.078125 C 75.71875 -77.078125 70.820312 -73.523438 63.40625 -66.421875 C 43 -46.898438 27.1875 -27.503906 15.96875 -8.234375 C 15.238281 -7.097656 13.828125 -5.320312 11.734375 -2.90625 C 9.640625 -0.488281 8.226562 0.71875 7.5 0.71875 Z M 7.5 0.71875 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(345.56361, 247.721562)"><g><path d="M 99.828125 -91.953125 C 105.953125 -91.953125 109.015625 -89.859375 109.015625 -85.671875 C 109.015625 -83.410156 108.488281 -81.753906 107.4375 -80.703125 C 106.394531 -79.648438 104.15625 -76.160156 100.71875 -70.234375 C 97.289062 -64.304688 93.5 -56.722656 89.34375 -47.484375 C 85.195312 -38.253906 82.519531 -30.367188 81.3125 -23.828125 C 81.070312 -23.023438 80.953125 -21.898438 80.953125 -20.453125 C 80.953125 -16.015625 82.160156 -13.796875 84.578125 -13.796875 C 86.992188 -13.796875 89.851562 -14.941406 93.15625 -17.234375 C 96.46875 -19.535156 99.414062 -22 102 -24.625 C 104.582031 -27.25 107.101562 -29.929688 109.5625 -32.671875 C 112.019531 -35.410156 113.488281 -36.984375 113.96875 -37.390625 C 114.457031 -37.796875 115.1875 -38 116.15625 -38 C 117.6875 -38 118.613281 -36.828125 118.9375 -34.484375 C 119.257812 -32.140625 119.421875 -29.71875 119.421875 -27.21875 C 119.421875 -24.71875 119.179688 -22.984375 118.703125 -22.015625 C 116.359375 -17.421875 111.210938 -11.894531 103.265625 -5.4375 C 95.316406 1.007812 88.097656 4.234375 81.609375 4.234375 C 75.117188 4.234375 70.335938 2.257812 67.265625 -1.6875 C 64.203125 -5.644531 62.671875 -10.019531 62.671875 -14.8125 C 62.671875 -19.613281 63.476562 -23.832031 65.09375 -27.46875 C 58.394531 -18.75 50.707031 -11.363281 42.03125 -5.3125 C 33.363281 0.726562 26.285156 3.75 20.796875 3.75 C 15.316406 3.75 10.84375 2.097656 7.375 -1.203125 C 2.9375 -5.316406 0.71875 -11.023438 0.71875 -18.328125 C 0.71875 -25.628906 2.351562 -32.96875 5.625 -40.34375 C 8.894531 -47.726562 13.191406 -54.460938 18.515625 -60.546875 C 23.835938 -66.640625 29.6875 -72.1875 36.0625 -77.1875 C 49.445312 -87.675781 61.785156 -92.921875 73.078125 -92.921875 C 77.429688 -92.921875 80.976562 -92.191406 83.71875 -90.734375 C 86.46875 -89.285156 88.207031 -87.472656 88.9375 -85.296875 C 90.863281 -88.203125 92.492188 -90.035156 93.828125 -90.796875 C 95.160156 -91.566406 97.160156 -91.953125 99.828125 -91.953125 Z M 83.734375 -78.53125 C 69.929688 -78.53125 55.648438 -70.863281 40.890625 -55.53125 C 35.648438 -50.050781 30.832031 -43.476562 26.4375 -35.8125 C 22.039062 -28.144531 19.84375 -22.898438 19.84375 -20.078125 C 19.84375 -17.253906 20.648438 -15.84375 22.265625 -15.84375 C 24.523438 -15.84375 30.816406 -20.300781 41.140625 -29.21875 C 51.460938 -38.132812 58.316406 -44.6875 61.703125 -48.875 C 65.410156 -53.5625 72.753906 -63.445312 83.734375 -78.53125 Z M 83.734375 -78.53125 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(446.466667, 247.721562)"><g><path d="M 20.8125 -24.203125 L 20.6875 -22.265625 C 20.6875 -20.242188 21.453125 -18.503906 22.984375 -17.046875 C 24.515625 -15.597656 25.925781 -14.875 27.21875 -14.875 C 36.90625 -14.875 45.476562 -16.328125 52.9375 -19.234375 C 60.394531 -22.140625 64.125 -25.046875 64.125 -27.953125 C 64.125 -29.316406 62.769531 -30.503906 60.0625 -31.515625 C 57.363281 -32.523438 52.804688 -33.773438 46.390625 -35.265625 C 39.984375 -36.765625 35.328125 -37.9375 32.421875 -38.78125 C 29.523438 -39.625 27.226562 -40.410156 25.53125 -41.140625 C 23.832031 -41.867188 22.097656 -42.875 20.328125 -44.15625 C 16.535156 -46.820312 14.640625 -50.796875 14.640625 -56.078125 C 14.640625 -61.359375 16.59375 -66.597656 20.5 -71.796875 C 24.414062 -77.003906 29.316406 -81.460938 35.203125 -85.171875 C 41.097656 -88.890625 47.429688 -92.160156 54.203125 -94.984375 C 67.597656 -100.546875 78.851562 -103.328125 87.96875 -103.328125 C 96.914062 -103.328125 102.441406 -101.390625 104.546875 -97.515625 C 105.179688 -96.148438 105.5 -94.617188 105.5 -92.921875 L 105.5 -92.078125 C 105.5 -87.804688 104.59375 -84.457031 102.78125 -82.03125 C 100.96875 -79.613281 98.101562 -77.4375 94.1875 -75.5 C 90.28125 -73.5625 87.175781 -72.59375 84.875 -72.59375 C 82.570312 -72.59375 81.117188 -72.753906 80.515625 -73.078125 C 79.910156 -73.398438 79.40625 -73.820312 79 -74.34375 C 78.601562 -74.875 78.101562 -75.257812 77.5 -75.5 C 76.894531 -75.738281 76.59375 -76.34375 76.59375 -77.3125 C 76.59375 -78.28125 76.992188 -79.269531 77.796875 -80.28125 C 78.609375 -81.289062 79.175781 -82.359375 79.5 -83.484375 C 74.164062 -83.242188 68.59375 -82.015625 62.78125 -79.796875 C 56.976562 -77.578125 52 -75.09375 47.84375 -72.34375 C 43.695312 -69.601562 40.25 -66.984375 37.5 -64.484375 C 34.757812 -61.984375 33.390625 -60.148438 33.390625 -58.984375 C 33.390625 -57.816406 35.242188 -56.867188 38.953125 -56.140625 C 55.648438 -52.835938 66.617188 -49.972656 71.859375 -47.546875 C 77.109375 -45.128906 80.738281 -42.382812 82.75 -39.3125 C 84.769531 -36.25 85.78125 -33.46875 85.78125 -30.96875 C 85.78125 -25.8125 83.722656 -20.929688 79.609375 -16.328125 C 75.492188 -11.734375 70.414062 -7.984375 64.375 -5.078125 C 51.382812 1.296875 40.066406 4.484375 30.421875 4.484375 C 20.785156 4.484375 14.128906 3.007812 10.453125 0.0625 C 6.785156 -2.882812 4.953125 -6.375 4.953125 -10.40625 C 4.953125 -14.4375 5.976562 -18.164062 8.03125 -21.59375 C 10.09375 -25.019531 12.738281 -26.734375 15.96875 -26.734375 C 19.195312 -26.734375 20.8125 -25.890625 20.8125 -24.203125 Z M 20.8125 -24.203125 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(537.569786, 247.721562)"><g><path d="M 113.984375 -35.6875 C 114.546875 -31.976562 114.828125 -29.054688 114.828125 -26.921875 C 114.828125 -24.785156 114.441406 -22.929688 113.671875 -21.359375 C 112.910156 -19.785156 111.21875 -17.566406 108.59375 -14.703125 C 105.96875 -11.835938 102.84375 -8.953125 99.21875 -6.046875 C 90.34375 0.972656 81.265625 4.484375 71.984375 4.484375 C 58.679688 4.484375 52.03125 -1.40625 52.03125 -13.1875 C 52.03125 -23.4375 60.941406 -43.84375 78.765625 -74.40625 C 79.410156 -75.539062 79.851562 -76.347656 80.09375 -76.828125 C 73.882812 -72.472656 62.007812 -60.59375 44.46875 -41.1875 C 26.925781 -21.789062 15.25 -8.0625 9.4375 0 C 8.957031 0.726562 7.75 1.535156 5.8125 2.421875 C 3.875 3.304688 2.359375 3.75 1.265625 3.75 C 0.179688 3.75 -0.984375 3.40625 -2.234375 2.71875 C -3.484375 2.03125 -4.269531 1.6875 -4.59375 1.6875 C -5.644531 1.6875 -6.171875 1.34375 -6.171875 0.65625 C -6.171875 -0.0195312 -4.738281 -3.722656 -1.875 -10.453125 C 0.988281 -17.191406 4.757812 -25.566406 9.4375 -35.578125 C 22.257812 -63.160156 41.335938 -99.050781 66.671875 -143.25 C 75.546875 -158.738281 82.484375 -169.710938 87.484375 -176.171875 C 91.023438 -180.765625 96.992188 -183.0625 105.390625 -183.0625 C 107.160156 -183.0625 108.164062 -182.535156 108.40625 -181.484375 C 108.65625 -180.441406 108.78125 -179.316406 108.78125 -178.109375 C 108.78125 -176.898438 108.535156 -175.6875 108.046875 -174.46875 L 95.109375 -154.265625 C 69.453125 -114.253906 50.128906 -81.101562 37.140625 -54.8125 C 49.722656 -70.132812 61.945312 -81.953125 73.8125 -90.265625 C 81.144531 -95.503906 86.644531 -98.125 90.3125 -98.125 C 93.988281 -98.125 97.316406 -97.539062 100.296875 -96.375 C 103.285156 -95.207031 104.78125 -92.40625 104.78125 -87.96875 C 104.78125 -86.351562 102.160156 -80.382812 96.921875 -70.0625 C 81.191406 -39.082031 73.328125 -21.878906 73.328125 -18.453125 C 73.328125 -15.023438 74.738281 -13.3125 77.5625 -13.3125 C 81.675781 -13.3125 88.003906 -17.300781 96.546875 -25.28125 C 103.003906 -31.332031 107.082031 -35.207031 108.78125 -36.90625 C 109.738281 -37.632812 110.625 -38 111.4375 -38 C 112.96875 -38 113.816406 -37.226562 113.984375 -35.6875 Z M 113.984375 -35.6875 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(634.964223, 247.721562)"><g><path d="M 25.890625 -48.28125 L 25.28125 -48.28125 C 23.675781 -48.113281 22.085938 -48.554688 20.515625 -49.609375 C 18.941406 -50.660156 18.15625 -51.953125 18.15625 -53.484375 C 18.15625 -55.015625 18.578125 -56.382812 19.421875 -57.59375 C 20.265625 -58.800781 20.828125 -60.050781 21.109375 -61.34375 C 21.390625 -62.632812 22.84375 -64.488281 25.46875 -66.90625 C 28.09375 -69.332031 30.3125 -70.644531 32.125 -70.84375 C 33.9375 -71.039062 37.140625 -71.300781 41.734375 -71.625 C 46.335938 -71.945312 50.9375 -72.289062 55.53125 -72.65625 C 60.132812 -73.019531 64.570312 -73.203125 68.84375 -73.203125 C 73.125 -73.203125 75.601562 -72.976562 76.28125 -72.53125 C 76.96875 -72.09375 77.734375 -71.003906 78.578125 -69.265625 C 79.429688 -67.535156 80.21875 -66.265625 80.9375 -65.453125 C 81.664062 -64.648438 82.03125 -63.335938 82.03125 -61.515625 C 82.03125 -59.703125 81.300781 -58.128906 79.84375 -56.796875 C 78.394531 -55.472656 76.765625 -54.671875 74.953125 -54.390625 C 73.140625 -54.109375 71.101562 -53.820312 68.84375 -53.53125 C 66.582031 -53.25 64.0625 -52.96875 61.28125 -52.6875 C 58.5 -52.40625 55.859375 -52.101562 53.359375 -51.78125 C 50.859375 -51.457031 47.992188 -50.972656 44.765625 -50.328125 C 38.554688 -49.117188 32.265625 -48.4375 25.890625 -48.28125 Z M 25.890625 -48.28125 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(713.605695, 247.721562)"><g><path d="M 86.265625 -132.859375 C 86.265625 -128.253906 84.125 -123.632812 79.84375 -119 C 75.570312 -114.363281 71.117188 -112.046875 66.484375 -112.046875 C 61.847656 -112.046875 59.53125 -114.460938 59.53125 -119.296875 C 59.53125 -124.140625 61.566406 -128.757812 65.640625 -133.15625 C 69.710938 -137.550781 74.207031 -139.75 79.125 -139.75 C 81.300781 -139.75 83.035156 -139.144531 84.328125 -137.9375 C 85.617188 -136.726562 86.265625 -135.035156 86.265625 -132.859375 Z M 66.671875 -27.21875 C 66.671875 -24.800781 66.425781 -23.066406 65.9375 -22.015625 C 61.988281 -13.953125 55.695312 -7.441406 47.0625 -2.484375 C 38.4375 2.472656 30.9375 4.953125 24.5625 4.953125 C 18.1875 4.953125 12.695312 2.816406 8.09375 -1.453125 C 3.5 -5.722656 1.203125 -10.078125 1.203125 -14.515625 C 1.203125 -18.953125 3.421875 -25.40625 7.859375 -33.875 C 12.296875 -42.34375 16.734375 -50.164062 21.171875 -57.34375 C 25.609375 -64.53125 27.828125 -68.425781 27.828125 -69.03125 C 27.828125 -69.632812 27 -70.820312 25.34375 -72.59375 C 23.695312 -74.375 22.875 -75.6875 22.875 -76.53125 C 22.875 -77.375 24.546875 -79.585938 27.890625 -83.171875 C 31.234375 -86.765625 35.304688 -90.316406 40.109375 -93.828125 C 44.910156 -97.335938 48.582031 -99.09375 51.125 -99.09375 C 53.664062 -99.09375 55.941406 -97.960938 57.953125 -95.703125 C 59.972656 -93.441406 60.984375 -91.382812 60.984375 -89.53125 C 60.984375 -87.675781 51.382812 -70.210938 32.1875 -37.140625 C 31.945312 -36.660156 31.28125 -35.59375 30.1875 -33.9375 C 29.101562 -32.28125 28.253906 -30.90625 27.640625 -29.8125 C 27.035156 -28.726562 26.332031 -27.421875 25.53125 -25.890625 C 23.914062 -22.660156 23.109375 -19.957031 23.109375 -17.78125 C 23.109375 -15.039062 24.960938 -13.671875 28.671875 -13.671875 C 32.378906 -13.671875 36.226562 -14.941406 40.21875 -17.484375 C 44.21875 -20.023438 47.671875 -22.828125 50.578125 -25.890625 C 58.160156 -34.035156 62.472656 -38.109375 63.515625 -38.109375 C 65.617188 -38.109375 66.671875 -34.476562 66.671875 -27.21875 Z M 66.671875 -27.21875 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(763.815249, 247.721562)"><g><path d="M 90.75 -155.84375 L 95.703125 -154.625 C 96.429688 -154.625 97.078125 -154.257812 97.640625 -153.53125 C 98.203125 -152.8125 98.484375 -152.128906 98.484375 -151.484375 C 98.484375 -150.835938 97.632812 -149.101562 95.9375 -146.28125 C 94.25 -143.457031 92.253906 -140.25 89.953125 -136.65625 C 87.660156 -133.070312 86.429688 -131.117188 86.265625 -130.796875 C 92.554688 -131.273438 97.015625 -131.515625 99.640625 -131.515625 C 102.265625 -131.515625 104.054688 -131.332031 105.015625 -130.96875 C 105.984375 -130.613281 107.09375 -129.609375 108.34375 -127.953125 C 109.59375 -126.296875 110.742188 -125.046875 111.796875 -124.203125 C 112.847656 -123.359375 113.375 -122.085938 113.375 -120.390625 C 113.375 -118.691406 112.34375 -117.257812 110.28125 -116.09375 C 108.226562 -114.925781 106.03125 -114.222656 103.6875 -113.984375 C 84.976562 -112.117188 74.65625 -111.148438 72.71875 -111.078125 C 66.1875 -101.066406 57.050781 -85.472656 45.3125 -64.296875 C 33.570312 -43.128906 27.34375 -29.882812 26.625 -24.5625 C 26.300781 -22.144531 26.140625 -20.171875 26.140625 -18.640625 C 26.140625 -15.492188 27.789062 -13.921875 31.09375 -13.921875 C 34.40625 -13.921875 38.078125 -15.1875 42.109375 -17.71875 C 46.140625 -20.257812 49.847656 -23.023438 53.234375 -26.015625 C 62.265625 -34.078125 67.101562 -38.109375 67.75 -38.109375 C 69.851562 -38.109375 70.90625 -34.476562 70.90625 -27.21875 C 70.90625 -23.269531 69.085938 -19.722656 65.453125 -16.578125 C 57.304688 -9.554688 50.453125 -4.269531 44.890625 -0.71875 C 39.328125 2.820312 33.757812 4.59375 28.1875 4.59375 C 26.976562 4.59375 25.847656 4.472656 24.796875 4.234375 C 18.347656 3.023438 13.609375 0.664062 10.578125 -2.84375 C 7.554688 -6.351562 6.066406 -11.09375 6.109375 -17.0625 C 6.148438 -23.03125 7.925781 -30.269531 11.4375 -38.78125 C 14.945312 -47.289062 19.363281 -56.34375 24.6875 -65.9375 C 33.394531 -81.59375 42.101562 -96.273438 50.8125 -109.984375 L 46.21875 -109.375 C 36.863281 -108.332031 31.421875 -107.8125 29.890625 -107.8125 L 28.796875 -107.8125 C 26.453125 -107.8125 24.191406 -108.273438 22.015625 -109.203125 C 19.835938 -110.128906 18.75 -111.273438 18.75 -112.640625 C 18.75 -114.015625 19.332031 -115.347656 20.5 -116.640625 C 21.675781 -117.929688 22.382812 -118.9375 22.625 -119.65625 C 23.1875 -121.4375 25.300781 -123.414062 28.96875 -125.59375 C 32.644531 -127.769531 35.410156 -128.914062 37.265625 -129.03125 C 39.117188 -129.15625 40.910156 -129.257812 42.640625 -129.34375 C 44.378906 -129.425781 46.316406 -129.503906 48.453125 -129.578125 C 50.597656 -129.660156 52.234375 -129.742188 53.359375 -129.828125 L 64.25 -130.3125 C 71.019531 -140.476562 75.675781 -147.007812 78.21875 -149.90625 C 80.757812 -152.8125 82.234375 -154.40625 82.640625 -154.6875 C 83.046875 -154.96875 83.851562 -155.109375 85.0625 -155.109375 Z M 90.75 -155.84375 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(148.130331, 337.738462)"><g><path d="M 36.242188 -46.53125 L 36.242188 -51.449219 L 5.675781 -51.449219 L 5.675781 0 L 10.972656 0 L 10.972656 -23.226562 L 35.484375 -23.226562 L 35.484375 -28.222656 L 10.972656 -28.222656 L 10.972656 -46.53125 Z M 36.242188 -46.53125 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(185.885242, 337.738462)"><g><path d="M 11.046875 -44.792969 C 10.367188 -45.398438 9.535156 -45.777344 8.625 -45.777344 C 7.71875 -45.777344 6.886719 -45.398438 6.28125 -44.792969 C 5.597656 -44.113281 5.296875 -43.277344 5.296875 -42.371094 C 5.296875 -41.464844 5.597656 -40.632812 6.28125 -40.027344 C 6.886719 -39.34375 7.71875 -39.042969 8.625 -39.042969 C 9.535156 -39.042969 10.367188 -39.34375 11.046875 -40.027344 C 11.652344 -40.632812 12.03125 -41.464844 12.03125 -42.371094 C 12.03125 -43.277344 11.652344 -44.113281 11.046875 -44.792969 Z M 11.347656 0 L 11.347656 -33.292969 L 6.054688 -33.292969 L 6.054688 0 Z M 11.347656 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(203.211642, 337.738462)"><g><path d="M 1.511719 -28.375 L 9.835938 -28.375 L 9.835938 0 L 15.132812 0 L 15.132812 -28.375 L 23.378906 -28.375 L 23.378906 -33.292969 L 15.132812 -33.292969 L 15.132812 -46.230469 L 9.835938 -46.230469 L 9.835938 -33.292969 L 1.511719 -33.292969 Z M 1.511719 -28.375 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(228.104144, 337.738462)"><g/></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(248.532653, 337.738462)"><g><path d="M 10.972656 0 L 10.972656 -23 L 34.351562 -23 L 34.351562 0 L 39.648438 0 L 39.648438 -51.449219 L 34.351562 -51.449219 L 34.351562 -28.296875 L 10.972656 -28.296875 L 10.972656 -51.449219 L 5.675781 -51.449219 L 5.675781 0 Z M 10.972656 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(293.853664, 337.738462)"><g><path d="M 38.210938 -17.402344 C 38.210938 -21.941406 36.394531 -25.875 32.914062 -29.28125 C 29.507812 -32.535156 25.421875 -34.199219 20.808594 -34.199219 C 15.964844 -34.199219 11.878906 -32.460938 8.472656 -29.054688 C 5.070312 -25.648438 3.40625 -21.5625 3.40625 -16.796875 C 3.40625 -11.953125 5.070312 -7.867188 8.472656 -4.539062 C 10.0625 -2.949219 11.878906 -1.742188 13.996094 -0.832031 C 16.117188 0.0742188 18.613281 0.53125 21.5625 0.53125 C 24.515625 0.53125 27.390625 -0.378906 30.265625 -2.195312 C 33.140625 -4.011719 35.257812 -6.582031 36.695312 -9.761719 L 30.644531 -9.761719 C 29.433594 -8.171875 27.996094 -6.960938 26.253906 -6.054688 C 24.515625 -5.144531 22.699219 -4.765625 20.808594 -4.765625 C 17.933594 -4.765625 15.359375 -5.675781 13.089844 -7.566406 C 10.820312 -9.382812 9.382812 -11.726562 8.929688 -14.601562 L 38.210938 -14.601562 Z M 32.609375 -19.144531 L 9.003906 -19.144531 C 9.304688 -20.503906 9.835938 -21.789062 10.59375 -23 C 13.015625 -26.9375 16.417969 -28.902344 20.808594 -28.902344 C 23.605469 -28.902344 26.105469 -27.996094 28.296875 -26.179688 C 30.566406 -24.289062 31.929688 -21.941406 32.609375 -19.144531 Z M 32.609375 -19.144531 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(335.08898, 337.738462)"><g><path d="M 32.15625 -16.644531 C 32.15625 -13.390625 31.023438 -10.515625 28.75 -8.171875 C 26.480469 -5.75 23.683594 -4.539062 20.429688 -4.539062 C 17.101562 -4.539062 14.300781 -5.75 12.03125 -8.171875 C 9.761719 -10.515625 8.703125 -13.390625 8.703125 -16.644531 C 8.703125 -19.824219 9.761719 -22.699219 12.03125 -25.121094 C 14.300781 -27.542969 17.101562 -28.75 20.429688 -28.75 C 23.683594 -28.75 26.480469 -27.542969 28.75 -25.121094 C 31.023438 -22.699219 32.15625 -19.824219 32.15625 -16.644531 Z M 37.453125 0 L 37.453125 -33.292969 L 32.15625 -33.292969 L 32.15625 -27.542969 C 31.855469 -27.996094 31.476562 -28.375 31.171875 -28.75 C 27.996094 -32.230469 24.136719 -34.046875 19.597656 -34.046875 C 14.980469 -34.046875 11.121094 -32.230469 7.945312 -28.75 C 4.917969 -25.269531 3.40625 -21.261719 3.40625 -16.644531 C 3.40625 -11.953125 4.917969 -7.945312 7.945312 -4.539062 C 11.121094 -0.984375 14.980469 0.757812 19.597656 0.757812 C 24.136719 0.757812 27.996094 -0.984375 31.171875 -4.539062 C 31.476562 -4.84375 31.855469 -5.222656 32.15625 -5.675781 L 32.15625 0 Z M 37.453125 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(378.215813, 337.738462)"><g><path d="M 10.972656 0 L 10.972656 -56.746094 L 5.675781 -56.746094 L 5.675781 0 Z M 10.972656 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(394.861251, 337.738462)"><g><path d="M 1.511719 -28.375 L 9.835938 -28.375 L 9.835938 0 L 15.132812 0 L 15.132812 -28.375 L 23.378906 -28.375 L 23.378906 -33.292969 L 15.132812 -33.292969 L 15.132812 -46.230469 L 9.835938 -46.230469 L 9.835938 -33.292969 L 1.511719 -33.292969 Z M 1.511719 -28.375 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(419.753753, 337.738462)"><g><path d="M 10.972656 0 L 10.972656 -13.921875 C 10.972656 -18.539062 11.726562 -22.019531 13.316406 -24.4375 C 14.226562 -25.800781 15.359375 -26.785156 16.796875 -27.542969 C 18.160156 -28.296875 20.050781 -28.675781 22.320312 -28.675781 C 24.589844 -28.675781 26.179688 -27.84375 27.164062 -26.332031 C 28.148438 -24.816406 28.675781 -22.925781 28.675781 -20.808594 L 28.675781 0 L 33.972656 0 L 33.972656 -20.808594 C 33.972656 -24.667969 32.914062 -27.769531 30.945312 -30.113281 C 29.886719 -31.324219 28.675781 -32.230469 27.238281 -32.914062 C 25.726562 -33.59375 23.832031 -33.972656 21.488281 -33.972656 C 19.066406 -33.972656 17.023438 -33.292969 15.207031 -32.082031 C 13.46875 -30.945312 12.03125 -29.433594 10.972656 -27.542969 L 10.972656 -56.746094 L 5.675781 -56.746094 L 5.675781 0 Z M 10.972656 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(458.265261, 337.738462)"><g><path d="M 9.910156 18.914062 L 32.914062 -33.292969 L 27.011719 -33.292969 L 17.476562 -10.972656 L 6.808594 -33.292969 L 0.757812 -33.292969 L 14.679688 -5.449219 L 3.480469 18.914062 Z M 9.910156 18.914062 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(490.421221, 337.738462)"><g/></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(510.84973, 337.738462)"><g><path d="M 10.972656 -5.296875 L 10.972656 -51.449219 L 5.675781 -51.449219 L 5.675781 0 L 29.355469 0 L 29.355469 -5.296875 Z M 10.972656 -5.296875 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(541.719461, 337.738462)"><g><path d="M 11.046875 -44.792969 C 10.367188 -45.398438 9.535156 -45.777344 8.625 -45.777344 C 7.71875 -45.777344 6.886719 -45.398438 6.28125 -44.792969 C 5.597656 -44.113281 5.296875 -43.277344 5.296875 -42.371094 C 5.296875 -41.464844 5.597656 -40.632812 6.28125 -40.027344 C 6.886719 -39.34375 7.71875 -39.042969 8.625 -39.042969 C 9.535156 -39.042969 10.367188 -39.34375 11.046875 -40.027344 C 11.652344 -40.632812 12.03125 -41.464844 12.03125 -42.371094 C 12.03125 -43.277344 11.652344 -44.113281 11.046875 -44.792969 Z M 11.347656 0 L 11.347656 -33.292969 L 6.054688 -33.292969 L 6.054688 0 Z M 11.347656 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(559.045882, 337.738462)"><g><path d="M 23.53125 -51.828125 L 23.53125 -56.746094 L 19.746094 -56.746094 C 15.964844 -56.746094 13.316406 -55.761719 11.726562 -53.949219 C 10.140625 -52.132812 9.382812 -49.484375 9.382812 -46.15625 L 9.382812 -33.292969 L 2.648438 -33.292969 L 2.648438 -28.375 L 9.382812 -28.375 L 9.382812 0 L 14.679688 0 L 14.679688 -28.375 L 23.53125 -28.375 L 23.53125 -33.292969 L 14.679688 -33.292969 L 14.679688 -47.667969 C 14.679688 -48.800781 14.90625 -49.785156 15.511719 -50.617188 C 16.039062 -51.375 17.175781 -51.828125 18.992188 -51.828125 Z M 23.53125 -51.828125 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(584.846314, 337.738462)"><g><path d="M 38.210938 -17.402344 C 38.210938 -21.941406 36.394531 -25.875 32.914062 -29.28125 C 29.507812 -32.535156 25.421875 -34.199219 20.808594 -34.199219 C 15.964844 -34.199219 11.878906 -32.460938 8.472656 -29.054688 C 5.070312 -25.648438 3.40625 -21.5625 3.40625 -16.796875 C 3.40625 -11.953125 5.070312 -7.867188 8.472656 -4.539062 C 10.0625 -2.949219 11.878906 -1.742188 13.996094 -0.832031 C 16.117188 0.0742188 18.613281 0.53125 21.5625 0.53125 C 24.515625 0.53125 27.390625 -0.378906 30.265625 -2.195312 C 33.140625 -4.011719 35.257812 -6.582031 36.695312 -9.761719 L 30.644531 -9.761719 C 29.433594 -8.171875 27.996094 -6.960938 26.253906 -6.054688 C 24.515625 -5.144531 22.699219 -4.765625 20.808594 -4.765625 C 17.933594 -4.765625 15.359375 -5.675781 13.089844 -7.566406 C 10.820312 -9.382812 9.382812 -11.726562 8.929688 -14.601562 L 38.210938 -14.601562 Z M 32.609375 -19.144531 L 9.003906 -19.144531 C 9.304688 -20.503906 9.835938 -21.789062 10.59375 -23 C 13.015625 -26.9375 16.417969 -28.902344 20.808594 -28.902344 C 23.605469 -28.902344 26.105469 -27.996094 28.296875 -26.179688 C 30.566406 -24.289062 31.929688 -21.941406 32.609375 -19.144531 Z M 32.609375 -19.144531 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(626.081652, 337.738462)"><g><path d="M 10.441406 -4.691406 C 9.15625 -5.597656 8.171875 -7.113281 7.640625 -9.304688 L 2.042969 -9.304688 C 3.179688 -2.421875 7.566406 0.984375 15.285156 0.984375 C 17.101562 0.984375 18.765625 0.832031 20.351562 0.378906 C 21.941406 -0.0742188 23.304688 -0.679688 24.589844 -1.511719 C 27.164062 -3.253906 28.449219 -5.902344 28.449219 -9.457031 C 28.449219 -13.089844 26.785156 -15.664062 23.304688 -17.328125 C 21.867188 -18.007812 20.277344 -18.539062 18.539062 -18.914062 C 16.871094 -19.292969 15.285156 -19.746094 13.847656 -20.203125 C 12.332031 -20.65625 11.121094 -21.261719 10.140625 -21.941406 C 9.15625 -22.625 8.625 -23.683594 8.625 -25.195312 C 8.625 -26.710938 9.230469 -27.84375 10.441406 -28.523438 C 11.652344 -29.28125 13.089844 -29.660156 14.679688 -29.660156 C 16.34375 -29.660156 17.78125 -29.28125 18.914062 -28.675781 C 20.050781 -28.070312 20.957031 -26.859375 21.488281 -25.042969 L 27.164062 -25.042969 C 26.480469 -28.375 25.042969 -30.71875 22.925781 -32.003906 C 20.730469 -33.367188 18.082031 -34.046875 14.828125 -34.046875 C 11.652344 -34.046875 8.851562 -33.140625 6.507812 -31.476562 C 4.238281 -29.734375 3.027344 -27.238281 3.027344 -23.910156 C 3.027344 -22.320312 3.480469 -20.882812 4.3125 -19.671875 C 5.222656 -18.386719 6.507812 -17.402344 8.171875 -16.644531 C 9.683594 -15.964844 11.273438 -15.433594 12.9375 -14.980469 C 14.601562 -14.601562 16.191406 -14.148438 17.707031 -13.695312 C 21.109375 -12.558594 22.851562 -10.894531 22.851562 -8.777344 C 22.851562 -5.144531 20.429688 -3.40625 15.585938 -3.40625 C 13.542969 -3.40625 11.804688 -3.78125 10.441406 -4.691406 Z M 10.441406 -4.691406 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(656.497448, 337.738462)"><g><path d="M 1.511719 -28.375 L 9.835938 -28.375 L 9.835938 0 L 15.132812 0 L 15.132812 -28.375 L 23.378906 -28.375 L 23.378906 -33.292969 L 15.132812 -33.292969 L 15.132812 -46.230469 L 9.835938 -46.230469 L 9.835938 -33.292969 L 1.511719 -33.292969 Z M 1.511719 -28.375 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(681.38993, 337.738462)"><g><path d="M 9.910156 18.914062 L 32.914062 -33.292969 L 27.011719 -33.292969 L 17.476562 -10.972656 L 6.808594 -33.292969 L 0.757812 -33.292969 L 14.679688 -5.449219 L 3.480469 18.914062 Z M 9.910156 18.914062 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(713.545929, 337.738462)"><g><path d="M 10.972656 0 L 10.972656 -56.746094 L 5.675781 -56.746094 L 5.675781 0 Z M 10.972656 0 "/></g></g></g><g fill="#20cfee" fill-opacity="1"><g transform="translate(730.191368, 337.738462)"><g><path d="M 38.210938 -17.402344 C 38.210938 -21.941406 36.394531 -25.875 32.914062 -29.28125 C 29.507812 -32.535156 25.421875 -34.199219 20.808594 -34.199219 C 15.964844 -34.199219 11.878906 -32.460938 8.472656 -29.054688 C 5.070312 -25.648438 3.40625 -21.5625 3.40625 -16.796875 C 3.40625 -11.953125 5.070312 -7.867188 8.472656 -4.539062 C 10.0625 -2.949219 11.878906 -1.742188 13.996094 -0.832031 C 16.117188 0.0742188 18.613281 0.53125 21.5625 0.53125 C 24.515625 0.53125 27.390625 -0.378906 30.265625 -2.195312 C 33.140625 -4.011719 35.257812 -6.582031 36.695312 -9.761719 L 30.644531 -9.761719 C 29.433594 -8.171875 27.996094 -6.960938 26.253906 -6.054688 C 24.515625 -5.144531 22.699219 -4.765625 20.808594 -4.765625 C 17.933594 -4.765625 15.359375 -5.675781 13.089844 -7.566406 C 10.820312 -9.382812 9.382812 -11.726562 8.929688 -14.601562 L 38.210938 -14.601562 Z M 32.609375 -19.144531 L 9.003906 -19.144531 C 9.304688 -20.503906 9.835938 -21.789062 10.59375 -23 C 13.015625 -26.9375 16.417969 -28.902344 20.808594 -28.902344 C 23.605469 -28.902344 26.105469 -27.996094 28.296875 -26.179688 C 30.566406 -24.289062 31.929688 -21.941406 32.609375 -19.144531 Z M 32.609375 -19.144531 "/></g></g></g></svg>
      </div>
      <button class="menu-toggle" type="button" onClick={toggleNav} aria-expanded={isOpen()} role="menu toggle">
        <span class="sr-only">menu toggle</span>
        { isOpen() ?
          <svg height="512px" id="close-icon" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
        :
          <svg height="32px" id="open-icon" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        }
      </button>
      <ul class="nav-list" aria-expanded={isOpen()}>
        <li>
          <a href="https://www.smashit.co.za/" target="https://www.smashit.co.za/" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="https://www.smashit.co.za/services-2/" target="https://www.smashit.co.za/services-2/" rel="noopener noreferrer">
            Services
          </a>
        </li>
        <li>
          <a href="https://www.smashit.co.za/about/" target="https://www.smashit.co.za/about/" rel="noopener noreferrer">
            Meet the Team
          </a>
        </li>
        <li>
          <a href="https://www.smashit.co.za/blog-2/" target="https://www.smashit.co.za/blog-2/" rel="noopener noreferrer">
            Blog
          </a>
        </li>
        <li>
          <a href="https://www.smashit.co.za/faqs/" target="https://www.smashit.co.za/faqs/" rel="noopener noreferrer">
            FAQs
          </a>
        </li>
        <li>
          <a href="" class="current-page">Calorie Calculator</a>
        </li>
        <li>
          <a id="contact" href="https://www.smashit.co.za/contact-2/" target="https://www.smashit.co.za/contact-2/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};



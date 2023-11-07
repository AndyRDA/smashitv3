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
          <a href="#contact" class="current-page">Calorie Calculator</a>
        </li>
        <li>
          <a id="contact" href="https://www.smashit.co.za/contact-2/" target="https://www.smashit.co.za/contact-2/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};



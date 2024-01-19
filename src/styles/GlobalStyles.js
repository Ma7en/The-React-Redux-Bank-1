import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// :root {

//     &,&.light-mode {
//     // Grey
//     --color-grey-0: #fff;
//     --color-grey-50: #f9fafb;
//     --color-grey-100: #f3f4f6;
//     --color-grey-200: #e5e7eb;
//     --color-grey-300: #d1d5db;
//     --color-grey-400: #9ca3af;
//     --color-grey-500: #6b7280;
//     --color-grey-600: #4b5563;
//     --color-grey-700: #374151;
//     --color-grey-800: #1f2937;
//     --color-grey-900: #111827;

//     --color-blue-100: #e0f2fe;
//     --color-blue-700: #0369a1;
//     --color-green-100: #dcfce7;
//     --color-green-700: #15803d;
//     --color-yellow-100: #fef9c3;
//     --color-yellow-700: #a16207;
//     --color-silver-100: #e5e7eb;
//     --color-silver-700: #374151;
//     --color-indigo-100: #e0e7ff;
//     --color-indigo-700: #4338ca;

//     --color-red-100: #fee2e2;
//     --color-red-700: #b91c1c;
//     --color-red-800: #991b1b;

//     --backdrop-color: rgba(255, 255, 255, 0.1);

//     --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
//     --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
//     --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

//     --image-grayscale: 0;
//     --image-opacity: 100%;

//     }

//     &.dark-mode {
//     --color-grey-0: #18212f;
//     --color-grey-50: #111827;
//     --color-grey-100: #1f2937;
//     --color-grey-200: #374151;
//     --color-grey-300: #4b5563;
//     --color-grey-400: #6b7280;
//     --color-grey-500: #9ca3af;
//     --color-grey-600: #d1d5db;
//     --color-grey-700: #e5e7eb;
//     --color-grey-800: #f3f4f6;
//     --color-grey-900: #f9fafb;

//     --color-blue-100: #075985;
//     --color-blue-700: #e0f2fe;
//     --color-green-100: #166534;
//     --color-green-700: #dcfce7;
//     --color-yellow-100: #854d0e;
//     --color-yellow-700: #fef9c3;
//     --color-silver-100: #374151;
//     --color-silver-700: #f3f4f6;
//     --color-indigo-100: #3730a3;
//     --color-indigo-700: #e0e7ff;

//     --color-red-100: #fee2e2;
//     --color-red-700: #b91c1c;
//     --color-red-800: #991b1b;

//     --backdrop-color: rgba(0, 0, 0, 0.3);

//     --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
//     --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
//     --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

//     --image-grayscale: 10%;
//     --image-opacity: 90%;
//     }

//     // Indigo
//     --color-brand-50: #eef2ff;
//     --color-brand-100: #e0e7ff;
//     --color-brand-200: #c7d2fe;
//     --color-brand-500: #6366f1;
//     --color-brand-600: #4f46e5;
//     --color-brand-700: #4338ca;
//     --color-brand-800: #3730a3;
//     --color-brand-900: #312e81;

//     --border-radius-tiny: 3px;
//     --border-radius-sm: 5px;
//     --border-radius-md: 7px;
//     --border-radius-lg: 9px;

//     // For dark mode
//     // --image-grayscale: 0;
//     // --image-opacity: 100%;
// }

// *,
// *::before,
// *::after {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;

//     // Creating animations for dark mode
//     transition: background-color 0.3s, border 0.3s;
// }

// html {
//     font-size: 62.5%;
// }

// body {
//     font-family: "Poppins", sans-serif;
//     color: var(--color-grey-700);

//     transition: color 0.3s, background-color 0.3s;
//     min-height: 100vh;
//     line-height: 1.5;
//     font-size: 1.6rem;
// }

// input,
// button,
// textarea,
// select {
//     font: inherit;
//     color: inherit;
// }

// button {
//     cursor: pointer;
//     user-select: none;
// }

// *:disabled {
//     cursor: not-allowed;
// }

// select:disabled,
// input:disabled {
//     background-color: var(--color-grey-200);
//     color: var(--color-grey-500);
// }

// input:focus,
// button:focus,
// textarea:focus,
// select:focus {
//     outline: 2px solid var(--color-brand-600);
//     outline-offset: -1px;
// }

// // Parent selector, finally 😃
// button:has(svg) {
//     line-height: 0;
// }

// a {
//     color: inherit;
//     text-decoration: none;
// }

// ul {
//     list-style: none;
// }

// p,
// h1,
// h2,
// h3,
// h4,
// h5,
// h6 {
//     overflow-wrap: break-word;
//     hyphens: auto;
// }

// img {
//     max-width: 100%;
//     pointer-events: none;
//     user-select: none;

//     // For dark mode
//     filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
// }

// `;

const GlobalStyles = createGlobalStyle`

    
:root {
    --first-color: #ffebb3;
    --secound-color: #f4a226;
    --third-color: #e5771f;
    --foruth-color: #76c7ad;
    --fifth-color: #5a3e2b;

    --main-transition: all 0.5s;
}

/* === start reyset === */

* {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*:focus {
    outline: none;
}

html {
    scroll-behavior: smooth;
}

ul {
    list-style: none;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
    border: none;
    outline: none;
}

button:focus {
    cursor: pointer;
    border: none;
    outline: none;
}

textarea {
    resize: none;
    /* border: none; */
    outline: none;
}

textarea:focus {
    outline: none;
    border: none;
}

input {
    border: none;
    /* outline: none; */
}

input:focus {
    outline: none;
}

/* === end reyset === */

.container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

/* start  */

html {
    font-size: 62.5%;
}

.appbank {
    min-height: 100vh;
}


.logo {
    user-select: none;
    background-color: var(--secound-color);
    .container {
        padding: 2.5rem 2rem;
        h1 {
            text-align: center;
            font-family: "Monoton";
            font-size: 4rem;
            text-transform: uppercase;
            font-weight: 400;
            word-spacing: 30px;
            letter-spacing: -5px;
        }
    }
}

.header {
    background-color: #f7f7f7;
    user-select: none;
    margin-bottom: 3rem;
    .container {
        .nav {
            padding: 2rem 0rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            li {
                a {
                    font-size: 2rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-transform: capitalize;
                }
            }
        }
    }
}

.create {
    margin-bottom: 3rem;
    .container {
        .form {
            background-color: #f7f7f7;
            border-radius: 2rem;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            gap: 2rem;
            h2  {
                text-align: center;
                font-size: 3rem;
            }
            div {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                label,
                input {
                    font-size: 1.8rem;
                    padding: 1.4rem;
                }
                button {
                    text-transform: uppercase;
                    font-weight: bold;
                    padding: 1.8rem 2rem;
                    border-radius: .4rem;
                    cursor: pointer;
                }
            }
        }
    }
}

.user {    
    margin-top: 3rem;
    margin-bottom: 3rem;
    .container {
        .box {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            background-color: #f7f7f7;
            border-radius: 2rem;
            padding: 2rem;
            div {
                h2 {
                    font-size: 3rem;
                    text-transform: capitalize;
                }
                p{
                    font-size: 3rem;
                    text-align: end;
                }
            }
        }
    }
}

.account {
    margin-top: 3rem;
    margin-bottom: 3rem;
    .container {
        .form {
            background-color: #f7f7f7;
            border-radius: 2rem;
            padding: 2rem;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            gap: 2rem;
            h2  {
                text-align: center;
                font-size: 3rem;
            }
            > div {
                width: 100%;
                display: grid;
                /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
                grid-template-columns:  auto 1fr;
                gap: 2rem;

                div {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                label,
                input,
                select ,
                span
                 {
                    font-size: 1.8rem;
                    padding: 1.4rem;
                }
                button {
                    text-transform: uppercase;
                    font-weight: bold;
                    padding: 1.8rem 2rem;
                    border-radius: .4rem;
                    cursor: pointer;
                }
            }
        }
        .box {
            margin-top: 3rem;
            
            button {
                text-transform: uppercase;
                font-weight: bold;
                padding: 1.8rem 2rem;
                border-radius: .4rem;
                cursor: pointer;
            }
        }
    }
}

.landing {    margin-top: 3rem;
    margin-bottom: 3rem;
    .container {
        .box {
            background-color: #f7f7f7;
            border-radius: 2rem;
            padding: 2rem;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            gap: 2rem;
            h2 {
                text-align: center;
                font-size: 3rem;
                text-transform: capitalize;
            }
            div{
                display : flex;
                gap: 2rem;

                a,
                span {
                    font-size: 2rem;
                    font-weight: 700;
                }
                a {
                    cursor: pointer;
                }
            }
        }
    }
}

/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */

/* 
input,
select {
    margin: 0 8px;
    padding: 4px 8px;
    font: inherit;
}

button {
    text-transform: uppercase;
    font-weight: bold;
    padding: 6px 8px;
    cursor: pointer;
}

.inputs {
    background-color: #f7f7f7;
    padding: 32px;
}

.inputs > * + * {
    margin-top: 20px;
}

.balance {
    position: absolute;
    top: 40px;
    right: 40px;
    background-color: #f7f7f7;
    padding: 24px 32px;
    font-weight: bold;
    font-size: 32px;
    min-width: 180px;
    text-align: center;
} */


/* ========== start media Queries =============== */

/* start max 767px */
@media (max-width: 767px) {
}

/* start min 768 */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* start max 991 */
@media (max-width: 991px) {
}

/* start min 992 */
@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

/* start min 1200 */
@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

/* ========== end media Queries =============== */

`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/

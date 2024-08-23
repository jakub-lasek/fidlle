import { FC } from "react";

const Skeleton: FC = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7926 14.8783C8.7926 14.8783 8.91173 8.92254 9.09042 7.07629C9.26904 5.23004 10.6985 0.5846 16.8924 0.703662C16.8924 0.703662 22.8943 0.87685 23.3091 8.26735C23.3224 8.50297 23.3222 8.73841 23.318 8.97435C23.2969 10.1359 23.2364 13.8992 23.2999 15.7758C23.3095 16.0643 23.3613 16.3495 23.4652 16.6188C23.557 16.8572 23.6632 17.2131 23.6809 17.6163C23.7069 18.2082 23.8253 18.791 24.0823 19.3248C24.4602 20.1097 25.0534 21.1835 25.7949 22.0046C26.265 22.525 26.4954 23.2332 26.3521 23.9197C26.2704 24.3114 26.0849 24.7091 25.7069 25.003C25.7069 25.003 27.6723 27.3258 25.2305 29.6485C25.2305 29.6485 24.2776 30.6014 22.9264 31.121C22.5593 31.2621 22.1655 31.3182 21.773 31.2924C19.4658 31.141 10.3407 30.0244 5.94635 21.8004C5.63623 21.22 5.48579 20.5588 5.56741 19.9058C5.66579 19.1185 6.08285 18.2263 7.42291 18.0349C7.42291 18.0349 7.04835 16.7688 8.04298 16.1922C8.50654 15.9231 8.77892 15.4142 8.7926 14.8783Z" fill="url(#paint0_linear_160_2156)" />
            <path d="M25.2304 29.6484C27.6722 27.3257 25.7068 25.0029 25.7068 25.0029C26.085 24.7089 26.2704 24.3111 26.3521 23.9193C26.4951 23.2338 26.2665 22.5261 25.7968 22.0066C25.0475 21.1778 24.4495 20.0905 24.0718 19.3032C23.8195 18.7773 23.7058 18.202 23.6809 17.6194C23.6638 17.218 23.5588 16.8633 23.4672 16.6243C23.3614 16.3483 23.309 16.0558 23.2992 15.7604C23.2366 13.8787 23.2968 10.1327 23.3178 8.97426C23.3221 8.73832 23.3222 8.50288 23.309 8.26726C22.8943 0.87676 16.8923 0.703635 16.8923 0.703635C16.6355 0.698697 16.3898 0.704822 16.1491 0.715697C16.7631 1.0482 17.5385 1.63782 17.8907 2.60051C18.0724 3.09695 17.8355 3.65863 17.3532 3.87501C16.0563 4.4567 13.518 6.39726 13.9594 12.6144C13.9594 12.6144 13.2387 17.8852 18.0138 21.3463C18.5287 21.7196 18.8816 22.281 19.0021 22.9054C19.0997 23.4113 19.1537 24.0416 19.0417 24.6944C18.931 25.3395 18.2431 25.7195 17.6431 25.4577C17.3644 25.336 17.0617 25.1803 16.78 24.9863C16.6447 24.8931 16.464 24.8728 16.3268 24.9631C16.1195 25.0994 16.0893 25.3788 16.2483 25.553C16.5633 25.8984 17.1489 26.4967 17.8344 26.9863C17.8344 26.9863 16.3884 29.1943 12.4073 28.4523C16.3158 30.7339 20.3466 31.1986 21.7728 31.2922C22.1653 31.3179 22.559 31.2619 22.9261 31.1208C24.2775 30.6013 25.2304 29.6484 25.2304 29.6484Z" fill="#8E545C" />
            <path d="M19.1664 5.18659C20.134 5.64759 21.0111 6.52678 21.2643 8.17397C21.2921 8.3549 21.3043 8.5379 21.3135 8.72078L21.6817 15.992C21.7308 16.9627 21.9165 17.9185 22.1802 18.854C22.3898 19.5976 22.4329 20.5374 21.4827 20.8571C21.3936 20.8871 21.2995 20.9 21.2055 20.9028C20.3384 20.9293 15.9891 20.7298 12.9581 14.3915C12.726 13.9062 12.5645 13.3902 12.4724 12.8602C12.2458 11.5558 12.0241 9.06253 13.113 7.10659C14.299 4.9764 16.9655 4.1379 19.1664 5.18659Z" fill="#602E3A" />
            <path d="M18.3153 4.87896C16.3164 4.37021 14.1495 5.24496 13.1131 7.10646C12.1048 8.9174 12.2204 11.1872 12.4229 12.5493C13.0064 13.0516 13.6995 13.1372 14.1606 13.1238C14.4579 13.1152 14.7137 13.3305 14.7604 13.6242L14.8844 14.4038C14.9183 14.6172 15.1022 14.7741 15.3182 14.7741H15.8262C16.0531 14.7741 16.2426 14.6013 16.2636 14.3755L16.3477 13.4718C16.3673 13.2622 16.5431 13.102 16.7536 13.102C16.9623 13.102 17.1374 13.2597 17.1589 13.4674L17.254 14.3803C17.2773 14.6042 17.4659 14.7742 17.6909 14.7742H18.1205C18.3631 14.7742 18.5598 14.5775 18.5598 14.3348V13.5696C18.5598 13.3515 18.7313 13.1721 18.9491 13.1623L19.0052 13.1598C19.2373 13.1495 19.431 13.3348 19.431 13.5671V14.1793C19.431 14.4219 19.6276 14.6186 19.8703 14.6186C20.1129 14.6186 20.3095 14.4219 20.3095 14.1793V8.51334C20.3096 6.64071 19.19 5.49165 18.3153 4.87896Z" fill="url(#paint1_linear_160_2156)" />
            <path d="M16.4571 8.19759C15.9368 8.19378 14.9191 8.31672 14.4992 9.27684C14.3497 9.61853 14.3146 10.0061 14.4229 10.363C14.4254 10.3712 14.428 10.3794 14.4306 10.3877C14.6665 11.1258 15.5761 11.3949 16.1914 10.9237C16.2161 10.9048 16.2413 10.8852 16.2667 10.8651C16.9059 10.3597 17.2228 9.52197 17.0151 8.73403C16.9974 8.66666 16.9759 8.60003 16.9501 8.53503C16.8697 8.33309 16.6742 8.19916 16.4571 8.19759Z" fill="#602E3A" />
            <path d="M18.7277 8.48231C19.0997 8.55743 19.7639 8.80268 19.8057 9.59781C19.814 9.75581 19.7705 9.91256 19.697 10.0526L19.6894 10.0671C19.4582 10.4991 18.8618 10.5623 18.5331 10.1989C18.5246 10.1894 18.516 10.1799 18.5074 10.1701C18.158 9.77612 18.0477 9.20387 18.2776 8.73012C18.2868 8.71112 18.2965 8.69237 18.3069 8.67387C18.3899 8.52456 18.5602 8.4485 18.7277 8.48231Z" fill="#602E3A" />
            <path d="M18.112 10.8442C18.2008 10.9828 18.2946 11.1458 18.3697 11.3157C18.4439 11.4835 18.3163 11.6719 18.1328 11.6719H17.761C17.5904 11.6719 17.4673 11.5093 17.5142 11.3452C17.5499 11.22 17.5959 11.0672 17.6503 10.902C17.7185 10.6949 17.9943 10.6607 18.112 10.8442Z" fill="#602E3A" />
            <path d="M10.5382 19.8003C11.3431 20.5422 12.5713 21.6093 13.5941 22.2204C13.8638 22.3815 13.9103 22.7518 13.6825 22.9682C13.5048 23.1369 13.2282 23.142 13.0458 22.9785C12.4566 22.4503 11.1926 21.2588 10.3024 20.0077C10.1931 19.8539 10.3995 19.6725 10.5382 19.8003Z" fill="#8E545C" />
            <path d="M20.1265 7.26181C19.7736 6.10906 18.9751 5.34119 18.3153 4.87906C16.5784 4.43706 14.7157 5.0405 13.577 6.42725C14.9098 5.85794 17.7736 5.05394 20.1265 7.26181Z" fill="#E5B4F7" />
            <defs>
                <linearGradient id="paint0_linear_160_2156" x1="16" y1="5.88654" x2="16" y2="44.9878" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0103" stop-color="#B7858F" />
                    <stop offset="1" stop-color="#8E545C" />
                </linearGradient>
                <linearGradient id="paint1_linear_160_2156" x1="16.298" y1="13.326" x2="16.298" y2="-2.22128" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0051" stop-color="#FFE1FF" />
                    <stop offset="1" stop-color="#E5B4F7" />
                </linearGradient>
            </defs>
        </svg>
    )
}
export default Skeleton;

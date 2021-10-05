import { Link } from 'gatsby';
import React from 'react';

function Nav() {
  return (
    <nav>
      <aside>
        <div>
          <a href="/" className="site-title">
            <svg
              width="157"
              height="55"
              viewBox="0 0 157 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.5759 0.660172C39.7177 0.220057 38.0795 0 36.6613 0C33.8984 0 31.8567 0.61127 30.5364 1.83381C29.2405 3.05635 28.5926 4.96352 28.5926 7.5553V8.949H26.1719L25.9152 11.6264L26.0986 11.8831H28.6659L28.7393 18.7782L28.4458 25.8567H33.3238L33.0671 18.3381L33.1771 11.8831H40.0722L40.2189 18.8149L39.9622 25.8567H44.8034L44.5467 18.3381L44.8401 8.76562L44.5467 8.58224L41.8693 8.949H33.2138L33.2504 6.52837C33.2749 5.45253 33.5072 4.67011 33.9473 4.18109C34.4118 3.69207 35.1331 3.44757 36.1112 3.44757C37.2604 3.44757 38.7396 3.86323 40.549 4.69456L41.0258 4.43782L41.5759 0.660172ZM4.76791 18.3748L4.98797 25.8567H0L0.256734 18.8149L0 2.23725H5.06132L4.76791 18.3748ZM18.9639 13.2401C18.5727 12.7511 17.9981 12.5066 17.2401 12.5066C16.1398 12.5066 14.9662 13.0323 13.7192 14.0837V18.3381L13.9393 25.8567H9.06132L9.31805 18.8149L9.13467 9.13238L13.7559 8.72894V11.2229H14.0126C15.3574 10.0004 16.8245 9.12015 18.4138 8.58224C20.272 8.58224 21.6902 9.01013 22.6682 9.8659C23.6462 10.6972 24.1108 11.9075 24.0619 13.4969L23.9519 18.3748L24.1719 25.8567H19.2573L19.5507 15.2206C19.5752 14.3649 19.3796 13.7047 18.9639 13.2401ZM58.1759 13.2401C57.7847 12.7511 57.2101 12.5066 56.4522 12.5066C55.3519 12.5066 54.1782 13.0323 52.9312 14.0837V18.3381L53.1171 24.6883C54.6015 24.043 56.3279 23.7203 58.2963 23.7203C58.3739 23.7203 58.4512 23.7209 58.5282 23.722L58.7628 15.2206C58.7872 14.3649 58.5916 13.7047 58.1759 13.2401ZM63.3478 24.6284L63.1639 18.3748L63.2739 13.4969C63.3228 11.9075 62.8583 10.6972 61.8802 9.8659C60.9022 9.01013 59.4841 8.58224 57.6258 8.58224C56.0365 9.12015 54.5694 10.0004 53.2246 11.2229H52.9679V8.72894L48.3467 9.13238L48.5301 18.8149L48.2734 25.8567H51.1257C50.7005 26.1831 50.3033 26.5468 49.9341 26.9478C47.978 29.0995 47 32.1314 47 36.0435C47 39.8823 47.9169 42.8286 49.7507 44.8825C51.609 46.9364 54.2986 47.9633 57.8195 47.9633C59.8734 47.9633 61.8294 47.5354 63.6877 46.6796L64.0911 42.4619L63.651 42.2052C62.8686 42.6942 61.9883 43.0854 61.0103 43.3788C60.0567 43.6478 59.1276 43.7822 58.2229 43.7822C56.2669 43.7822 54.7754 43.0976 53.7484 41.7284C52.7459 40.3347 52.2447 38.2563 52.2447 35.4934C52.2447 30.3832 54.1885 27.8281 58.0762 27.8281C59.0054 27.8281 59.91 27.9748 60.7903 28.2682C61.6705 28.5616 62.4774 28.965 63.2109 29.4785L63.6143 29.2951L64.4946 25.1507C64.1219 24.9569 63.7397 24.7828 63.3478 24.6284ZM66.9158 9.13238L67.0991 18.8149L66.8424 25.8567H71.7203L71.5003 18.3381L71.7203 8.72894L66.9158 9.13238ZM71.1702 1.10029C70.7545 0.660173 70.1677 0.440116 69.4097 0.440116C68.5784 0.440116 67.9183 0.684623 67.4292 1.17364C66.9647 1.66265 66.7324 2.3106 66.7324 3.11748C66.7324 3.92436 66.9402 4.54785 67.3559 4.98797C67.796 5.42808 68.4195 5.64814 69.2264 5.64814C70.0332 5.64814 70.669 5.40363 71.1335 4.91461C71.5981 4.4256 71.8304 3.76543 71.8304 2.9341C71.8304 2.15167 71.6103 1.5404 71.1702 1.10029ZM82.3103 22.2625C83.0927 22.2625 83.9118 22.0546 84.7676 21.639L85.1711 22.0057L84.6943 24.9032C83.4473 25.5389 82.1758 25.9301 80.8799 26.0768C77.5791 25.7345 75.9287 24.1207 75.9287 21.2355L76.112 18.1914L76.0754 11.8831H73.8014L73.6181 11.6264L73.8748 8.949H76.0387V6.12493L80.4765 4.69456L80.8066 4.98797L80.6966 8.949H85.061L85.2077 9.20573L84.9877 11.8831H80.6232L80.4032 20.0986C80.4032 20.881 80.5499 21.4434 80.8433 21.7857C81.1367 22.1035 81.6257 22.2625 82.3103 22.2625ZM89.941 18.008L99.8436 17.9347L100.394 17.3479C100.516 16.4921 100.577 15.783 100.577 15.2206C100.577 13.0934 99.978 11.443 98.7799 10.2693C97.6063 9.07125 95.9314 8.47221 93.7553 8.47221C91.2124 8.47221 89.1952 9.27908 87.7037 10.8928C86.2122 12.4821 85.4665 14.646 85.4665 17.3845C85.4665 20.1475 86.2244 22.3114 87.7404 23.8762C89.2808 25.4411 91.3958 26.2235 94.0854 26.2235C95.7236 26.2235 97.4718 25.8812 99.3301 25.1966L100.064 21.5656L99.6602 21.3089C97.8019 22.1647 96.1148 22.5926 94.5989 22.5926C91.7137 22.5926 90.161 21.0644 89.941 18.008ZM95.6625 12.4699C96.1026 12.9589 96.3226 13.6925 96.3226 14.6705L96.2493 15.184L90.051 15.3307C90.2711 14.157 90.699 13.2646 91.3347 12.6533C91.9704 12.0176 92.765 11.6997 93.7186 11.6997C94.5744 11.6997 95.2223 11.9564 95.6625 12.4699ZM72.9521 30.2487C74.8349 30.2487 76.3019 30.6766 77.3533 31.5324C78.4291 32.3637 78.967 33.5373 78.967 35.0533C78.967 35.4934 78.8937 36.8871 78.747 39.2344C78.7225 39.919 78.6859 40.6281 78.637 41.3616C78.5881 42.0707 78.5636 42.6819 78.5636 43.1954C78.5636 43.6111 78.6247 43.9045 78.747 44.0756C78.8692 44.2223 79.0893 44.2957 79.4072 44.2957C79.6517 44.2957 79.9695 44.2468 80.3607 44.149L80.7275 44.4424L80.2874 47.0097C79.505 47.5232 78.6125 47.8288 77.61 47.9266C76.8765 47.8533 76.2652 47.5966 75.7762 47.1564C75.2872 46.6919 74.9571 46.0562 74.786 45.2493H74.5292C73.3067 46.5452 72.0475 47.4499 70.7516 47.9633C68.9911 47.9389 67.6096 47.4743 66.6072 46.5696C65.6047 45.6649 65.1034 44.4302 65.1034 42.8653C65.1034 41.6428 65.4091 40.6892 66.0203 40.0046C66.6561 39.2955 67.6096 38.8187 68.8811 38.5742L74.4926 37.5106V36.0069C74.4926 34.4176 73.7101 33.6229 72.1453 33.6229C71.3873 33.6229 70.5804 33.7941 69.7246 34.1364C68.8933 34.4787 67.952 35.0166 66.9006 35.7501L66.5338 35.5301L65.9837 32.3026C67.0351 31.6424 68.1598 31.1412 69.3579 30.7988C70.556 30.4321 71.7541 30.2487 72.9521 30.2487ZM70.5682 40.8115C70.177 40.9093 69.8836 41.0804 69.688 41.3249C69.5168 41.545 69.4312 41.8873 69.4312 42.3519C69.4312 42.9876 69.6024 43.4888 69.9447 43.8556C70.287 44.1979 70.7638 44.369 71.3751 44.369C72.3287 44.369 73.3311 43.8067 74.3825 42.6819L74.4559 39.9679L70.5682 40.8115ZM86.282 39.7845L96.1845 39.7112L96.7347 39.1244C96.8569 38.2686 96.9181 37.5595 96.9181 36.9971C96.9181 34.8699 96.319 33.2195 95.1209 32.0458C93.9473 30.8477 92.2724 30.2487 90.0963 30.2487C87.5534 30.2487 85.5362 31.0556 84.0447 32.6693C82.5532 34.2586 81.8074 36.4225 81.8074 39.161C81.8074 41.924 82.5654 44.0879 84.0814 45.6527C85.6218 47.2176 87.7368 48 90.4264 48C92.0646 48 93.8128 47.6577 95.6711 46.9731L96.4046 43.3421L96.0011 43.0854C94.1429 43.9412 92.4558 44.369 90.9398 44.369C88.0546 44.369 86.502 42.8409 86.282 39.7845ZM92.0034 34.2464C92.4436 34.7354 92.6636 35.469 92.6636 36.447L92.5903 36.9605L86.392 37.1072C86.612 35.9335 87.0399 35.0411 87.6756 34.4298C88.3114 33.7941 89.106 33.4762 90.0596 33.4762C90.9154 33.4762 91.5633 33.7329 92.0034 34.2464ZM105.085 30.2854C106.748 30.2854 108.313 30.5666 109.78 31.1289L109.119 34.7232L108.533 34.9066C107.824 34.442 107.115 34.0875 106.405 33.843C105.696 33.5985 105.073 33.4762 104.535 33.4762C103.948 33.4762 103.484 33.6351 103.141 33.953C102.799 34.2464 102.628 34.6132 102.628 35.0533C102.628 35.5668 102.848 35.9824 103.288 36.3003C103.753 36.6181 104.474 36.9727 105.452 37.3639C106.43 37.7551 107.237 38.1341 107.872 38.5009C108.508 38.8676 109.046 39.3811 109.486 40.0413C109.951 40.677 110.183 41.4716 110.183 42.4252C110.183 43.4032 109.926 44.3201 109.413 45.1759C108.924 46.0073 108.166 46.6919 107.139 47.2298C106.112 47.7433 104.853 48 103.361 48C101.601 48 99.7793 47.6332 97.8966 46.8997L98.4467 43.0854L98.9235 42.792C99.6815 43.4277 100.525 43.9412 101.454 44.3324C102.383 44.6991 103.202 44.8825 103.911 44.8825C104.572 44.8825 105.085 44.7236 105.452 44.4057C105.819 44.0634 106.002 43.66 106.002 43.1954C106.002 42.6819 105.77 42.2663 105.305 41.9484C104.865 41.6306 104.156 41.276 103.178 40.8848C102.175 40.4447 101.356 40.0535 100.721 39.7112C100.085 39.3444 99.5348 38.8309 99.0702 38.1708C98.6301 37.5106 98.41 36.6915 98.41 35.7135C98.41 34.1242 99.0091 32.8283 100.207 31.8258C101.405 30.7988 103.031 30.2854 105.085 30.2854ZM128.367 47.0097L128.807 44.4424L128.477 44.149C128.086 44.2468 127.755 44.2957 127.487 44.2957C127.193 44.2957 126.973 44.2101 126.826 44.039C126.704 43.8678 126.643 43.5866 126.643 43.1954L126.973 30.5054L122.315 30.9089V42.4986C121.264 43.4521 120.2 43.9289 119.124 43.9289C118.391 43.9289 117.841 43.7089 117.474 43.2688C117.107 42.8286 116.936 42.1807 116.96 41.3249L117.07 30.5054L112.339 30.9089L112.523 38.6109L112.449 42.9387C112.425 44.528 112.889 45.7505 113.843 46.6063C114.821 47.4376 116.239 47.8533 118.097 47.8533C119.589 47.4376 121.032 46.5452 122.425 45.1759H122.755C123 46.0073 123.354 46.643 123.819 47.0831C124.283 47.5232 124.87 47.8044 125.579 47.9266C126.533 47.9022 127.462 47.5966 128.367 47.0097ZM139.979 30.5421C140.199 30.5421 140.504 30.5666 140.895 30.6155V35.1266L140.382 35.31C139.966 35.1389 139.514 35.0533 139.025 35.0533C137.607 35.0533 136.323 35.9702 135.174 37.804V40.1146L135.431 47.6332H130.553L130.846 40.5914L130.626 30.9089L135.247 30.5054L135.211 33.843H135.504C136.702 31.6424 138.194 30.5421 139.979 30.5421ZM153.141 31.5324C152.09 30.6766 150.623 30.2487 148.74 30.2487C147.542 30.2487 146.344 30.4321 145.146 30.7988C143.948 31.1412 142.823 31.6424 141.772 32.3026L142.322 35.5301L142.689 35.7501C143.74 35.0166 144.681 34.4787 145.513 34.1364C146.368 33.7941 147.175 33.6229 147.933 33.6229C149.498 33.6229 150.281 34.4176 150.281 36.0069V37.5106L144.669 38.5742C143.398 38.8187 142.444 39.2955 141.808 40.0046C141.197 40.6892 140.891 41.6428 140.891 42.8653C140.891 44.4302 141.393 45.6649 142.395 46.5696C143.398 47.4743 144.779 47.9389 146.54 47.9633C147.835 47.4499 149.095 46.5452 150.317 45.2493H150.574C150.745 46.0562 151.075 46.6919 151.564 47.1564C152.053 47.5966 152.664 47.8533 153.398 47.9266C154.4 47.8288 155.293 47.5232 156.075 47.0097L156.515 44.4424L156.149 44.149C155.758 44.2468 155.44 44.2957 155.195 44.2957C154.877 44.2957 154.657 44.2223 154.535 44.0756C154.413 43.9045 154.352 43.6111 154.352 43.1954C154.352 42.6819 154.376 42.0707 154.425 41.3616C154.474 40.6281 154.51 39.919 154.535 39.2344C154.682 36.8871 154.755 35.4934 154.755 35.0533C154.755 33.5373 154.217 32.3637 153.141 31.5324ZM145.476 41.3249C145.672 41.0804 145.965 40.9093 146.356 40.8115L150.244 39.9679L150.17 42.6819C149.119 43.8067 148.117 44.369 147.163 44.369C146.552 44.369 146.075 44.1979 145.733 43.8556C145.39 43.4888 145.219 42.9876 145.219 42.3519C145.219 41.8873 145.305 41.545 145.476 41.3249Z"
                fill="#151515"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.98041 26.8567L10.72 33H12.88L14.032 29.544H14.16L15.296 33H17.472L19.54 26.8567H18.2293L18.2818 24.9539L18.064 26.152L16.544 30.904H16.416L15.056 26.232L14.9213 25.2277L14.9689 26.8567H13.3226L12.016 30.904H11.888L10.7963 26.8567H8.98041ZM13.0576 25.8567H13.9392L13.9118 24.92H12.8L13.0576 25.8567ZM19.2831 24.92L19.2573 25.8567H19.8766L20.192 24.92H19.2831ZM9.09546 24.92H10.448L10.555 25.8567H9.06131L9.09546 24.92ZM27.547 23.3949C27.3143 23.5408 27.1028 23.7131 26.9125 23.912C26.1978 24.6587 25.8405 25.7147 25.8405 27.08C25.8405 28.3707 26.1712 29.3733 26.8325 30.088C27.4938 30.792 28.4272 31.144 29.6325 31.144C30.9445 31.144 31.9578 30.7653 32.6725 30.008C33.3837 29.255 33.7462 28.2045 33.7601 26.8567H31.6593C31.6627 26.9643 31.6645 27.076 31.6645 27.192C31.6645 28.0773 31.5205 28.696 31.2325 29.048C30.9552 29.4 30.4805 29.576 29.8085 29.576C29.3498 29.576 28.9818 29.4907 28.7045 29.32C28.4378 29.1493 28.2405 28.8667 28.1125 28.472C27.9979 28.0761 27.9392 27.5376 27.9366 26.8567H27.4035L27.547 23.3949ZM31.554 25.8567C31.5305 25.7435 31.5034 25.6392 31.4725 25.544C31.3445 25.1387 31.1472 24.8507 30.8805 24.68C30.6138 24.5093 30.2458 24.424 29.7765 24.424C29.2105 24.424 28.7813 24.5568 28.4887 24.8224L28.5659 22.9591C28.9836 22.8477 29.4458 22.792 29.9525 22.792C31.1685 22.792 32.1072 23.1387 32.7685 23.832C32.969 24.0422 33.1392 24.279 33.2789 24.5422L33.3238 25.8567H31.554ZM56.2169 22.8438C56.1302 22.3008 55.8919 21.8676 55.502 21.544C55.126 21.2171 54.628 21.0154 54.0078 20.939L54.0703 23.0769C54.0915 23.1364 54.108 23.2002 54.1198 23.2682C54.7868 23.0753 55.4862 22.9344 56.2169 22.8438ZM53.0502 22.4027C52.9564 22.3896 52.8563 22.3807 52.75 22.376L51.934 22.408L51.886 24.856L53.086 24.92C53.4487 24.8027 53.7153 24.632 53.886 24.408C53.8919 24.4002 53.8978 24.3923 53.9035 24.3843C53.9708 24.3614 54.0385 24.339 54.1067 24.3173C54.7644 24.1074 55.4636 23.9529 56.2044 23.8537C56.1435 24.1639 56.0267 24.4607 55.854 24.744C55.5873 25.1707 55.214 25.528 54.734 25.816C55.2989 26.6338 55.8338 27.3717 56.3387 28.0295C55.6269 28.2106 55.008 28.5136 54.4818 28.9386L54.478 28.936C53.8807 27.9013 53.4166 27.0533 53.086 26.392H51.854V26.408L51.934 29H49.918L49.9883 26.8894C49.9986 26.8785 50.0088 26.8676 50.019 26.8567C50.364 26.4915 50.7329 26.1582 51.1257 25.8567H49.9875L49.918 20.92L53.0064 20.9058L53.0502 22.4027ZM53.9812 20.0314C54.2425 19.9707 54.4803 19.8856 54.6947 19.776C55.1854 19.5307 55.548 19.2107 55.7827 18.816C56.028 18.4107 56.1507 17.9787 56.1507 17.52C56.1507 17.0613 56.0387 16.6827 55.8147 16.384C55.6014 16.0747 55.34 15.8347 55.0307 15.664C54.7464 15.5015 54.3799 15.3246 53.9312 15.1331V17.3996C54.0882 17.5287 54.1667 17.6916 54.1667 17.888C54.1667 18.0896 54.089 18.2609 53.9335 18.402L53.9812 20.0314ZM52.9406 18.6597L52.9841 20.1435C52.9571 20.1438 52.93 20.144 52.9027 20.144C52.5187 20.144 52.0974 20.1013 51.6387 20.016C51.1907 19.9413 50.7534 19.8187 50.3267 19.648L50.5987 17.76L50.8067 17.616C51.1587 17.936 51.5534 18.192 51.9907 18.384C52.3375 18.5363 52.6542 18.6282 52.9406 18.6597ZM52.9312 16.8756C52.8958 16.8611 52.8597 16.8466 52.8227 16.832C52.3427 16.6293 51.948 16.4427 51.6387 16.272C51.34 16.0907 51.0787 15.8453 50.8547 15.536C50.6414 15.2267 50.5347 14.8427 50.5347 14.384C50.5347 13.904 50.6627 13.4667 50.9187 13.072C51.1854 12.6773 51.5587 12.368 52.0387 12.144C52.5294 11.92 53.1 11.808 53.7507 11.808C54.5187 11.808 55.2547 11.9413 55.9587 12.208L55.9007 12.5496C55.2601 12.6486 54.5956 12.9182 53.9073 13.3584C53.7633 13.3275 53.6258 13.312 53.4947 13.312C53.196 13.312 52.9614 13.3867 52.7907 13.536C52.62 13.6747 52.5347 13.8453 52.5347 14.048C52.5347 14.272 52.6414 14.4587 52.8547 14.608C52.8787 14.6236 52.9042 14.6395 52.9312 14.6557V16.8756ZM55.053 13.8608C55.1566 13.9278 55.2611 14.0008 55.3667 14.08L55.6547 14L55.721 13.6092C55.5091 13.6666 55.2866 13.7495 55.053 13.8608ZM64.0972 27.0214C63.7852 26.9431 63.435 26.904 63.0466 26.904L59.5586 26.92L59.5732 27.9587C59.984 28.0315 60.3896 28.1347 60.7903 28.2682C61.0574 28.3572 61.3179 28.4564 61.5715 28.5658L61.5746 28.408L62.3906 28.376C62.8706 28.3973 63.2226 28.504 63.4466 28.696C63.5456 28.7761 63.6227 28.876 63.6779 28.9957L64.0972 27.0214ZM63.4947 30.448L64.4876 29.9966L65.0282 27.4513C65.0675 27.481 65.1057 27.5119 65.1426 27.544C65.6439 27.96 65.8946 28.5573 65.8946 29.336C65.8946 29.8373 65.7613 30.3067 65.4946 30.744C65.2279 31.1707 64.8546 31.528 64.3746 31.816C64.6047 32.149 64.8297 32.4688 65.0498 32.7754L65.428 34.9938C65.0845 35.0608 64.7441 35.1055 64.4066 35.128L64.1186 34.936C63.5213 33.9013 63.0573 33.0533 62.7266 32.392H61.4946V32.408L61.5746 35H59.5586L59.6386 32.6L59.5876 28.9794C59.886 29.0402 60.1814 29.1193 60.474 29.2169C60.8488 29.3418 61.2073 29.4883 61.5501 29.6564L61.5266 30.856L62.7266 30.92C63.0674 30.8097 63.3234 30.6524 63.4947 30.448ZM52.7023 47.0042L52.6433 46.92H52.5172C52.5784 46.9486 52.6401 46.9767 52.7023 47.0042ZM50.5401 46.92C51.192 47.3862 51.9029 47.7704 52.6698 48.0747L52.6273 48.568L50.5473 48.488H49.0433L49.0113 50.12L50.4513 50.136L51.8433 50.088L51.9553 50.232L51.8273 51.752L50.3073 51.704H48.9793L48.9633 52.408L48.9953 53.432H50.4033L52.5793 53.368L52.7073 53.496L52.5633 55H47.0273L47.1073 52.6L47.0273 46.92H50.5401ZM47.0242 35C47.0643 34.1509 47.1546 33.3469 47.2949 32.5879L48.0639 35H47.0242ZM46.0249 34.963L45.8079 33.832L45.6639 33.368L44.0319 33.352L42.5919 33.384L42.4799 33.72L42.4617 33.8172C42.7816 34.2078 42.9415 34.714 42.9415 35.336C42.9415 35.8373 42.8082 36.3067 42.5415 36.744C42.2748 37.1707 41.9015 37.528 41.4215 37.816C42.1362 38.8507 42.8028 39.7573 43.4215 40.536L43.4055 40.76C42.7442 40.9627 42.0935 41.0853 41.4535 41.128L41.1655 40.936C40.5682 39.9013 40.1042 39.0533 39.7735 38.392H38.5415V38.408L38.6215 41H36.6055L36.6855 38.6L36.6055 32.92L40.0935 32.904C40.4146 32.904 40.7096 32.9307 40.9785 32.9843L43.104 26.92H45.4879L46.7108 30.7556C46.3224 32.0353 46.0963 33.4405 46.0249 34.963ZM73.9512 47.1692C74.0715 47.069 74.1911 46.9657 74.3101 46.8594C74.5157 47.2396 74.7732 47.5828 75.0875 47.8814L75.0972 47.8907L75.1072 47.8997C75.3603 48.1275 75.6354 48.3164 75.9296 48.4682L75.8696 51.408L75.9496 54H73.9336L74.0136 51.6L73.9512 47.1692ZM75.9533 47.3037C75.8926 47.2572 75.8336 47.2081 75.7762 47.1564C75.4823 46.8773 75.2459 46.5363 75.0668 46.1335C75.036 46.0641 75.0068 45.993 74.9794 45.92H75.9816L75.9533 47.3037ZM78.7094 48.7564L78.6679 50H80.684L80.6216 47.9807C80.0296 48.3374 79.3905 48.5951 78.7094 48.7564ZM81.3349 46.8179L82.236 46.8L83.859 46.8144C83.6906 46.6686 83.5272 46.5152 83.3687 46.3542L83.3631 46.3485C83.0029 45.9767 82.6823 45.5773 82.4004 45.1517L82.3639 45.152L81.6228 45.1382L81.3349 46.8179ZM80.6573 44.8518L80.2874 47.0097C79.8134 47.3208 79.2989 47.5556 78.7441 47.7141L78.7479 47.6L78.6971 43.9924C78.7124 44.0228 78.7291 44.0505 78.747 44.0756C78.8692 44.2223 79.0893 44.2957 79.4072 44.2957C79.6517 44.2957 79.9695 44.2468 80.3607 44.149L80.6665 44.3936L80.6573 44.8518ZM83.6288 45.1399C83.7713 45.3174 83.9222 45.4884 84.0814 45.6527C84.6242 46.2042 85.2384 46.6585 85.924 47.0156L86.0279 41.92H83.9799L84.0279 45.136L83.6288 45.1399ZM90.8022 30.2708C90.6556 30.518 90.4829 30.7424 90.2841 30.944C89.5374 31.712 88.4601 32.096 87.0521 32.096C86.3962 32.096 85.6145 32.0756 84.707 32.0348C85.5317 31.3377 86.4893 30.8446 87.5798 30.5556C87.8395 30.541 88.0704 30.49 88.2725 30.4027C88.847 30.3 89.4549 30.2487 90.0963 30.2487C90.3378 30.2487 90.5731 30.2561 90.8022 30.2708ZM85.9383 48.1324C85.2552 47.8283 84.6237 47.4426 84.0471 46.9725L84.06 47.6L83.9799 50H85.9959L85.9383 48.1324ZM105.267 29.2864C105.206 29.2857 105.146 29.2854 105.085 29.2854C104.556 29.2854 104.046 29.3171 103.557 29.3819L103.5 25L105.356 24.872L105.267 29.2864ZM103.112 29.4511L100.354 25.1778L100.2 25.9419L99.6758 26.1349C99.1227 26.3387 98.576 26.5146 98.0361 26.6619L98.0917 30.632L98.0117 33H98.0137C98.3717 32.2751 98.8882 31.6266 99.5607 31.0628C99.6351 30.9991 99.7108 30.9372 99.7877 30.8771L99.7717 30.168L99.7877 27.992H99.8997L101.211 30.0244C101.799 29.7622 102.434 29.5726 103.112 29.4511ZM101.761 30.8763C102.705 30.4824 103.813 30.2854 105.085 30.2854C105.139 30.2854 105.193 30.2857 105.247 30.2863L105.244 30.44L105.324 33H103.132L101.761 30.8763ZM99.8172 32.1836L99.8357 33H99.1605C99.3453 32.7111 99.5642 32.439 99.8172 32.1836ZM91.3783 26.9404C91.4062 27.1646 91.4201 27.4004 91.4201 27.648C91.4201 28.2595 91.3508 28.8104 91.2122 29.3008C90.8511 29.2659 90.4789 29.2487 90.0963 29.2487C89.79 29.2487 89.4896 29.2596 89.195 29.2814C89.2917 28.9582 89.3401 28.5737 89.3401 28.128C89.3401 27.1787 89.1854 26.5013 88.8761 26.096C88.8153 26.0142 88.7473 25.9405 88.672 25.8748C89.4884 26.3656 90.393 26.7189 91.3783 26.9404ZM98.0216 25.6273C98.4515 25.5031 98.8877 25.3596 99.3301 25.1966L99.386 24.92H98.0117L98.0216 25.6273ZM87.723 23.8582C88.8857 23.888 89.782 24.2179 90.4121 24.848C90.6988 25.1256 90.9244 25.4547 91.0888 25.8352C89.7704 25.4576 88.6543 24.8046 87.7404 23.8762C87.7346 23.8702 87.7288 23.8642 87.723 23.8582ZM85.8751 23.8861L86.4187 23.8763C86.6058 24.1179 86.8069 24.3499 87.0221 24.572L87.0277 24.5777C87.4245 24.9808 87.8528 25.3362 88.3112 25.645C88.0552 25.5297 87.7475 25.472 87.3881 25.472C86.8868 25.472 86.4281 25.4933 86.0121 25.536L85.9321 29.408L85.9527 30.0755C85.2534 30.3927 84.6077 30.8024 84.0192 31.3069L84.0761 29.6L84.0296 26.3013C84.4056 26.1518 84.7786 25.9826 85.1485 25.7941L85.5989 25.5644L85.8751 23.8861ZM69.9929 8.87399L69.9495 12.408L70.0135 15H68.0135L68.0935 12.6L68.0656 9.03583L69.9929 8.87399ZM72.1611 7.68841L65.8982 8.2143L65.9051 8.58061L65.8055 8.45602L65.9174 6.92001H72.0934L72.2055 7.08001L72.1611 7.68841ZM100.638 18.5492L101.339 17.8016L101.384 17.4893C101.509 16.6087 101.577 15.8483 101.577 15.2206C101.577 14.009 101.397 12.902 101.021 11.92H106.206L106.318 12.08L106.19 13.568L104.11 13.488H102.606L102.574 15.12L104.014 15.136L105.406 15.088L105.518 15.232L105.39 16.752L103.87 16.704H102.542L102.526 17.408L102.558 18.432H103.966L106.142 18.368L106.27 18.496L106.126 20H100.59L100.638 18.5492ZM75.0403 19.352L74.941 21H72.8071L72.9031 18.6L72.8071 12.92H74.8551L74.7431 18.408L74.7751 19.352H75.0403ZM75.9428 21L76.0421 19.352H77.5751L77.6871 19.496L77.5591 21H75.9428ZM84.0145 25.2244L83.9961 23.92L84.8586 23.9045L84.6943 24.9032C84.4685 25.0183 84.2419 25.1254 84.0145 25.2244ZM80.6917 43.1331L80.5987 43.0587L80.1182 43.1788C79.8785 43.2388 79.6969 43.271 79.565 43.2856C79.5641 43.2578 79.5636 43.2277 79.5636 43.1954C79.5636 42.8299 79.5768 42.4053 79.6039 41.92H80.716L80.6917 43.1331ZM66.3616 34.5196C66.3659 34.525 66.3703 34.5305 66.3746 34.536L66.3716 34.5784L66.3616 34.5196ZM40.2719 35L40.4026 34.6274C40.1786 34.4784 39.8569 34.3946 39.4375 34.376L38.6215 34.408L38.5735 36.856L39.7735 36.92C40.1362 36.8027 40.4028 36.632 40.5735 36.408C40.7442 36.184 40.8295 35.896 40.8295 35.544C40.8295 35.3317 40.7952 35.1504 40.7268 35H40.2719ZM45.2319 31.848L44.32 28.76H44.192L43.1199 31.848L44.16 31.864L45.2319 31.848ZM114.053 19.256C113.264 18.9573 112.421 18.808 111.525 18.808C110.074 18.808 108.954 19.1813 108.165 19.928C107.376 20.664 106.981 21.736 106.981 23.144C106.981 24.424 107.322 25.4107 108.005 26.104C108.688 26.7867 109.701 27.128 111.045 27.128C111.962 27.128 112.944 26.952 113.989 26.6V24.52L114.021 23.448L112.181 23.576L112.197 24.856V25.368C111.845 25.496 111.509 25.56 111.189 25.56C110.666 25.56 110.25 25.4853 109.941 25.336C109.642 25.176 109.424 24.9146 109.285 24.552C109.146 24.1893 109.077 23.688 109.077 23.048C109.077 22.088 109.237 21.416 109.557 21.032C109.888 20.6373 110.421 20.44 111.157 20.44C111.552 20.44 111.909 20.488 112.229 20.584C112.56 20.68 112.933 20.8453 113.349 21.08H113.525L114.053 19.256ZM34.9839 47.824C35.5493 47.9627 35.9653 48.1866 36.2319 48.496C36.5093 48.7947 36.6479 49.1946 36.6479 49.696C36.6479 50.5066 36.3119 51.104 35.6399 51.488C34.9679 51.872 33.9706 52.064 32.6479 52.064C32.0613 52.064 31.2346 52.0427 30.1679 52L30.2479 49.6L30.1679 43.92L33.4159 43.904C34.3119 43.904 35.0106 44.08 35.5119 44.432C36.0239 44.784 36.2799 45.2906 36.2799 45.952C36.2799 46.3786 36.1679 46.752 35.9439 47.072C35.7199 47.392 35.3999 47.6426 34.9839 47.824ZM34.1839 46.224C34.1839 45.8933 34.0666 45.664 33.8319 45.536C33.6079 45.408 33.2079 45.344 32.6319 45.344H32.1359L32.1039 47.248L33.2719 47.28C33.5813 47.2053 33.8106 47.088 33.9599 46.928C34.1093 46.7573 34.1839 46.5227 34.1839 46.224ZM32.9999 50.656C33.5119 50.656 33.9013 50.5706 34.1679 50.4C34.4453 50.2187 34.5839 49.952 34.5839 49.6C34.5839 49.344 34.4933 49.1413 34.3119 48.992C34.1306 48.8426 33.8533 48.7253 33.4799 48.64L32.0879 48.672L32.0719 49.408L32.1039 50.608C32.4453 50.64 32.7439 50.656 32.9999 50.656Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <h2 className="font-sans-sc text-base lowercase leading-none tracking-wide">
          Being as the World
        </h2>

        <p className="leading-tight font-sans">
          This is the wiki realm of Devin Halladay, a product designer
          and writer based in Manhattan.
        </p>
      </aside>
      <ul className="font-sans-sc text-lg lowercase mt-6">
        <li className="mb-2">
          <Link
            to="/"
            ariaLabel="View front page"
            activeClassName="text-domain-red font-bold">
            Front Page
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/essays"
            ariaLabel="Go to essays"
            activeClassName="text-domain-red font-bold">
            Essays
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/notes"
            ariaLabel="Go to notes"
            activeClassName="text-domain-red font-bold">
            Notes
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/works"
            ariaLabel="View work catalog"
            activeClassName="text-domain-red font-bold">
            Works
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/tags"
            ariaLabel="View site topics"
            activeClassName="text-domain-red font-bold">
            Concepts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import React, { Component } from 'react'
import styled from 'styled-components';

import './css/Navigation.css';

const Container = styled.div`
  padding: 1rem 1rem;
  font-size: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgb(218, 223, 252);
  display: flex;
`;

export default class Navigation extends Component {
  render() {
    return (
      <Container>
        <div class="logo">
          {/* width="227" height="60" */}
          <a href="/"><svg width="227" height="60" viewBox="0 0 2731 744" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="662.432" cy="671.318" r="17.3903" transform="rotate(-26.9626 662.432 671.318)" fill="#646E6E"/>
  <circle cx="2533.59" cy="62.3999" r="17.3903" transform="rotate(-134.228 2533.59 62.3999)" fill="#646E6E"/>
  <circle cx="686.79" cy="658.926" r="17.3903" transform="rotate(-26.9626 686.79 658.926)" fill="#646E6E"/>
  <circle cx="2514.53" cy="42.8179" r="17.3903" transform="rotate(-134.228 2514.53 42.8179)" fill="#646E6E"/>
  <circle cx="708.932" cy="647.664" r="17.3903" transform="rotate(-26.9626 708.932 647.664)" fill="#646E6E"/>
  <circle cx="2497.2" cy="25.0151" r="17.3903" transform="rotate(-134.228 2497.2 25.0151)" fill="#646E6E"/>
  <path d="M648.626 647.681L655.117 657.517" stroke="#646E6E" stroke-width="3"/>
  <path d="M2515.12 82.5994L2522.58 73.4816" stroke="#646E6E" stroke-width="3"/>
  <path d="M675.388 634.067L680.156 644.844" stroke="#646E6E" stroke-width="3"/>
  <path d="M2494.18 61.084L2503.05 53.3327" stroke="#646E6E" stroke-width="3"/>
  <path d="M697.531 622.803L702.298 633.58" stroke="#646E6E" stroke-width="3"/>
  <path d="M2476.85 43.2823L2485.72 35.5309" stroke="#646E6E" stroke-width="3"/>
  <path d="M718.696 659.421L725.241 669.22" stroke="#646E6E" stroke-width="3"/>
  <path d="M2505.53 12.2025L2512.95 3.0439" stroke="#646E6E" stroke-width="3"/>
  <path d="M691.8 673.102L700.09 681.477" stroke="#646E6E" stroke-width="3"/>
  <path d="M2526.58 33.8258L2532.12 23.4236" stroke="#646E6E" stroke-width="3"/>
  <path d="M667.966 685.226L672.733 696.003" stroke="#646E6E" stroke-width="3"/>
  <path d="M2545.23 52.9878L2554.11 45.2365" stroke="#646E6E" stroke-width="3"/>
  <path d="M1062.1 335C1080.47 335 1096.42 338.093 1109.95 344.28C1123.48 350.273 1133.92 358.973 1141.27 370.38C1148.62 381.593 1152.29 394.837 1152.29 410.11C1152.29 425.383 1148.62 438.627 1141.27 449.84C1133.92 461.053 1123.48 469.753 1109.95 475.94C1096.42 481.933 1080.47 484.93 1062.1 484.93H1026.72V538H969.3V335H1062.1ZM1058.62 439.69C1070.41 439.69 1079.31 437.177 1085.3 432.15C1091.29 426.93 1094.29 419.583 1094.29 410.11C1094.29 400.637 1091.29 393.29 1085.3 388.07C1079.31 382.85 1070.41 380.24 1058.62 380.24H1026.72V439.69H1058.62ZM1338 498.56H1252.16L1236.21 538H1177.63L1267.24 335H1323.79L1413.69 538H1353.95L1338 498.56ZM1321.18 456.22L1295.08 391.26L1268.98 456.22H1321.18ZM1494.88 380.53H1432.53V335H1614.36V380.53H1552.3V538H1494.88V380.53ZM1860.8 335V538H1803.38V458.83H1725.08V538H1667.66V335H1725.08V411.27H1803.38V335H1860.8ZM2251.05 335L2185.22 538H2123.74L2084.88 414.46L2044.28 538H1982.8L1916.97 335H1976.13L2017.02 464.63L2059.94 335H2112.72L2153.61 465.79L2196.24 335H2251.05ZM2432.46 498.56H2346.62L2330.67 538H2272.09L2361.7 335H2418.25L2508.15 538H2448.41L2432.46 498.56ZM2415.64 456.22L2389.54 391.26L2363.44 456.22H2415.64ZM2652.33 465.21V538H2594.91V464.34L2517.48 335H2578.09L2626.23 415.62L2674.37 335H2730.05L2652.33 465.21Z" fill="#FFA500"/>
  <path d="M868 159.5H786.75L771.25 197H729.75L807.75 22H847.75L926 197H883.5L868 159.5ZM855.25 128.75L827.5 61.75L799.75 128.75H855.25ZM1050.66 60.5C1067.32 60.5 1080.74 65.5 1090.91 75.5C1101.24 85.5 1106.41 100.333 1106.41 120V197H1067.41V126C1067.41 115.333 1065.07 107.417 1060.41 102.25C1055.74 96.9167 1048.99 94.25 1040.16 94.25C1030.32 94.25 1022.49 97.3333 1016.66 103.5C1010.82 109.5 1007.91 118.5 1007.91 130.5V197H968.906V62.5H1006.16V78.25C1011.32 72.5833 1017.74 68.25 1025.41 65.25C1033.07 62.0833 1041.49 60.5 1050.66 60.5ZM1256.01 190.5C1252.17 193.333 1247.42 195.5 1241.76 197C1236.26 198.333 1230.42 199 1224.26 199C1208.26 199 1195.84 194.917 1187.01 186.75C1178.34 178.583 1174.01 166.583 1174.01 150.75V95.5H1153.26V65.5H1174.01V32.75H1213.01V65.5H1246.51V95.5H1213.01V150.25C1213.01 155.917 1214.42 160.333 1217.26 163.5C1220.26 166.5 1224.42 168 1229.76 168C1235.92 168 1241.17 166.333 1245.51 163L1256.01 190.5ZM1433 130.25C1433 130.75 1432.75 134.25 1432.25 140.75H1330.5C1332.33 149.083 1336.67 155.667 1343.5 160.5C1350.33 165.333 1358.83 167.75 1369 167.75C1376 167.75 1382.17 166.75 1387.5 164.75C1393 162.583 1398.08 159.25 1402.75 154.75L1423.5 177.25C1410.83 191.75 1392.33 199 1368 199C1352.83 199 1339.42 196.083 1327.75 190.25C1316.08 184.25 1307.08 176 1300.75 165.5C1294.42 155 1291.25 143.083 1291.25 129.75C1291.25 116.583 1294.33 104.75 1300.5 94.25C1306.83 83.5833 1315.42 75.3333 1326.25 69.5C1337.25 63.5 1349.5 60.5 1363 60.5C1376.17 60.5 1388.08 63.3333 1398.75 69C1409.42 74.6667 1417.75 82.8333 1423.75 93.5C1429.92 104 1433 116.25 1433 130.25ZM1363.25 90C1354.42 90 1347 92.5 1341 97.5C1335 102.5 1331.33 109.333 1330 118H1396.25C1394.92 109.5 1391.25 102.75 1385.25 97.75C1379.25 92.5833 1371.92 90 1363.25 90ZM1537.05 60.5C1557.89 60.5 1573.89 65.5 1585.05 75.5C1596.22 85.3333 1601.8 100.25 1601.8 120.25V197H1565.3V180.25C1557.97 192.75 1544.3 199 1524.3 199C1513.97 199 1504.97 197.25 1497.3 193.75C1489.8 190.25 1484.05 185.417 1480.05 179.25C1476.05 173.083 1474.05 166.083 1474.05 158.25C1474.05 145.75 1478.72 135.917 1488.05 128.75C1497.55 121.583 1512.14 118 1531.8 118H1562.8C1562.8 109.5 1560.22 103 1555.05 98.5C1549.89 93.8333 1542.14 91.5 1531.8 91.5C1524.64 91.5 1517.55 92.6667 1510.55 95C1503.72 97.1667 1497.89 100.167 1493.05 104L1479.05 76.75C1486.39 71.5833 1495.14 67.5833 1505.3 64.75C1515.64 61.9167 1526.22 60.5 1537.05 60.5ZM1534.05 172.75C1540.72 172.75 1546.64 171.25 1551.8 168.25C1556.97 165.083 1560.64 160.5 1562.8 154.5V140.75H1536.05C1520.05 140.75 1512.05 146 1512.05 156.5C1512.05 161.5 1513.97 165.5 1517.8 168.5C1521.8 171.333 1527.22 172.75 1534.05 172.75ZM1751.35 190.5C1747.52 193.333 1742.77 195.5 1737.1 197C1731.6 198.333 1725.77 199 1719.6 199C1703.6 199 1691.18 194.917 1682.35 186.75C1673.68 178.583 1669.35 166.583 1669.35 150.75V95.5H1648.6V65.5H1669.35V32.75H1708.35V65.5H1741.85V95.5H1708.35V150.25C1708.35 155.917 1709.77 160.333 1712.6 163.5C1715.6 166.5 1719.77 168 1725.1 168C1731.27 168 1736.52 166.333 1740.85 163L1751.35 190.5ZM1928.34 130.25C1928.34 130.75 1928.09 134.25 1927.59 140.75H1825.84C1827.68 149.083 1832.01 155.667 1838.84 160.5C1845.68 165.333 1854.18 167.75 1864.34 167.75C1871.34 167.75 1877.51 166.75 1882.84 164.75C1888.34 162.583 1893.43 159.25 1898.09 154.75L1918.84 177.25C1906.18 191.75 1887.68 199 1863.34 199C1848.18 199 1834.76 196.083 1823.09 190.25C1811.43 184.25 1802.43 176 1796.09 165.5C1789.76 155 1786.59 143.083 1786.59 129.75C1786.59 116.583 1789.68 104.75 1795.84 94.25C1802.18 83.5833 1810.76 75.3333 1821.59 69.5C1832.59 63.5 1844.84 60.5 1858.34 60.5C1871.51 60.5 1883.43 63.3333 1894.09 69C1904.76 74.6667 1913.09 82.8333 1919.09 93.5C1925.26 104 1928.34 116.25 1928.34 130.25ZM1858.59 90C1849.76 90 1842.34 92.5 1836.34 97.5C1830.34 102.5 1826.68 109.333 1825.34 118H1891.59C1890.26 109.5 1886.59 102.75 1880.59 97.75C1874.59 92.5833 1867.26 90 1858.59 90ZM2019.06 80.25C2023.72 73.75 2029.97 68.8333 2037.81 65.5C2045.81 62.1667 2054.97 60.5 2065.31 60.5V96.5C2060.97 96.1667 2058.06 96 2056.56 96C2045.39 96 2036.64 99.1667 2030.31 105.5C2023.97 111.667 2020.81 121 2020.81 133.5V197H1981.81V62.5H2019.06V80.25Z" fill="#646F6E"/>
  <path d="M6 198.15C142.282 133.642 483.276 92.9293 757 446.137L718.725 509.872C645.461 452.317 455.092 417.166 279.724 737" stroke="#646E6E" stroke-width="25"/>
  <mask id="path-22-inside-1" fill="white">
  <ellipse cx="563" cy="330.5" rx="12" ry="11.5"/>
  </mask>
  <ellipse cx="563" cy="330.5" rx="12" ry="11.5" fill="#646E6E"/>
  <path d="M561 330.5C561 329.613 561.398 328.908 561.799 328.524C562.189 328.15 562.643 328 563 328V356C576.792 356 589 345.139 589 330.5H561ZM563 328C563.357 328 563.811 328.15 564.201 328.524C564.602 328.908 565 329.613 565 330.5H537C537 345.139 549.208 356 563 356V328ZM565 330.5C565 331.387 564.602 332.092 564.201 332.476C563.811 332.85 563.357 333 563 333V305C549.208 305 537 315.861 537 330.5H565ZM563 333C562.643 333 562.189 332.85 561.799 332.476C561.398 332.092 561 331.387 561 330.5H589C589 315.861 576.792 305 563 305V333Z" fill="#646E6E" mask="url(#path-22-inside-1)"/>
  <path d="M307.572 77.5142C300.276 104.504 301.839 160.809 366.46 170.109C374.255 138.915 373.39 76.7227 307.572 77.5142Z" stroke="#646E6E" stroke-width="25"/>
  <path d="M387 283.109C359.308 271.867 296.538 261.944 267 312.181C292.385 329.237 351.923 357.07 387 331.951" stroke="#646E6E" stroke-width="25"/>
  <path d="M218 418C234.607 441.193 382.343 496.277 455 522.95C445.312 522.95 375.423 583.252 350.628 625C276.818 609.229 231.263 479.076 218 418ZM218 418C261.825 473.471 353.28 589.436 386.956 581.087" stroke="#646E6E" stroke-width="20"/>
  <path d="M442.86 527.815C446.329 528.966 384.459 577.287 376.364 581.889C370.007 585.503 291.065 500.348 250.247 454.959C239.195 423.52 439.39 526.665 442.86 527.815Z" fill="#646E6E"/>
  <path d="M248 452.458C248.735 453.277 249.484 454.111 250.247 454.959M250.247 454.959C291.065 500.348 370.007 585.503 376.364 581.889C384.459 577.287 446.329 528.966 442.86 527.815C439.39 526.665 239.195 423.52 250.247 454.959Z" stroke="#646E6E"/>
  <path d="M740 483L766 503" stroke="#646E6E" stroke-width="19"/>
  </svg></a>

        </div>

        <a href="#" class="about-button">
          <span>About</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </Container>
    )
  }
}

import vay1 from '~/assets/images/vay-du-hoc.png'
import vay2 from '~/assets/images/vay-khac.png'
import vay3 from '~/assets/images/vay-kinh-doanh-bat-dong-san.png'
import vay4 from '~/assets/images/vay-kinh-doanh-chung-khoan.png'
import vay5 from '~/assets/images/vay-kinh-doanh-thuong-mai.png'
import vay6 from '~/assets/images/vay-mua-nhah.png'
import vay7 from '~/assets/images/vay-mua-oto.png'
import vay8 from '~/assets/images/vay-san-xuat.png'
import vay9 from '~/assets/images/vay-tieu-dung.png'
import vay10 from '~/assets/images/vay-tin-chap.png'
import vay11 from '~/assets/images/vay-xay-dung-cau.png'
import bot1 from '~/assets/images/bot1.jpg'
import bot2 from '~/assets/images/bot2.jpg'
import bot3 from '~/assets/images/bot3.png'
import bot4 from '~/assets/images/bot4.jpg'
import bot5 from '~/assets/images/bot5.png'
import bot6 from '~/assets/images/bot6.jpg'
import bot7 from '~/assets/images/bot7.jpg'
import bot8 from '~/assets/images/bot8.jpg'
import bot9 from '~/assets/images/bot9.jpg'
import bot10 from '~/assets/images/bot10.jpg'
import bot11 from '~/assets/images/bot11.jpg'
import argibank from '~/assets/images/agribank120x50.jpg'
import sacom from '~/assets/images/sacom125x50.png'
import jaccs from '~/assets/images/jaccs.jpg'
import hdbank120x50 from '~/assets/images/hdbank120x50.jpg'
import oceanbank120x50 from '~/assets/images/oceanbank120x50.jpg'
import pgbank120x50 from '~/assets/images/pgbank120x50.jpg'
import lpbank from '~/assets/images/lpbank.png'
import vpbank120x50 from '~/assets/images/vpbank120x50.jpg'
import nama120x50 from '~/assets/images/nama120x50.jpg'
import baoviet120x50 from '~/assets/images/baoviet120x50.jpg'
export const menuLink = [
  {
    title: 'Trang chủ',
    path: '/'
  },
  {
    title: 'Menu',
    children: [
      {
        title: 'Mở tín dụng',
        path: '/open-card'
      },
      {
        title: 'Lịch sử tín dụng',
        path: '/profile/loan-demand'
      }
    ]
  },
  {
    title: 'Giới thiệu'
  },
  {
    title: 'ĐĂNG KÝ VAY THEO GÓI CỦA TCTD',
    children: [
      {
        title: 'gói vay Cá nhân',
        path: '/loan-pack'
      },
      {
        title: 'gói vay Doanh nghiệp',
        path: '/loan-pack'
      },
      {
        title: 'Mở thẻ Thẻ tín dụng',
        path: '/card-pack'
      },
      {
        title: 'Mở thẻ Thẻ ghi nợ',
        path: '/card-pack'
      }
    ]
  },
  {
    title: 'khai thác báo cáo',
    children: [
      {
        title: 'Thông tin tín dụng',
        path: '/report'
      },
      {
        title: 'Xếp hạng tín dụng',
        path: '/credit-ratting'
      }
      // {
      //   title: 'Báo cáo thông tin doanh nghiệp',
      //   path: '/'
      // }
    ]
  },
  // {
  //   title: 'Tin tức',
  //   path: '/'
  // }
]

export const nhucauLink = [
  {
    img: vay1,
    title: 'Vay du học',
    bg: '#f58a3c'
  },
  {
    img: vay2,
    title: 'Vay khác',
    bg: '#82ac40'
  },
  {
    img: vay3,
    title: 'Vay kinh doanh bất động sản',
    bg: '#e75d5b'
  },
  {
    img: vay4,
    title: 'Vay kinh doanh chứng khoán',
    bg: '#55a67d'
  },
  {
    img: vay5,
    title: 'Vay kinh doanh thương mại',
    bg: '#be5f49'
  },
  {
    img: vay6,
    title: 'Vay mua nhà',
    bg: '#965e8b'
  },
  {
    img: vay7,
    title: 'Vay mua ô tô',
    bg: '#546785'
  },
  {
    img: vay8,
    title: 'Vay sản xuất',
    bg: '#2da4c4'
  },
  {
    img: vay9,
    title: 'Vay tiêu dùng',
    bg: '#5656bf'
  },
  {
    img: vay10,
    title: 'Vay tín chấp',
    bg: '#965e8b'
  },
  {
    img: vay11,
    title: 'Vay xây dựng cầu',
    bg: '#69bbaf'
  }
]
export const toChucLink = [
  {
    img: bot1
  },
  {
    img: bot2
  },
  {
    img: bot3
  },
  {
    img: bot4
  },
  {
    img: bot5
  },
  {
    img: bot6
  },
  {
    img: bot7
  },
  {
    img: bot8
  },
  {
    img: bot9
  },
  {
    img: bot10
  },
  {
    img: bot11
  }
]

export const loanPackLink = [
  {
    img: vay9,
    title: 'Vay tiêu dùng',
    bg: '#82ac40'
  },
  {
    img: vay5,
    title: 'Vay KD thương mại, dịch vụ',
    bg: '#55a67d'
  },
  {
    img: vay8,
    title: 'Vay sản xuất kinh doanh',
    bg: '#be5f49'
  },
  {
    img: vay11,
    title: 'Vay xây dựng cầu, đường',
    bg: '#965e8b'
  },
  {
    img: vay2,
    title: 'Vay khác',
    bg: '#546785'
  },
  {
    img: vay3,
    title: 'Vay kinh doanh bất động sản',
    bg: '#faa818'
  }
  // {
  //   img: vay4,
  //   title: 'Vay kinh doanh chứng khoán',
  //   bg: '#2da4c4'

  // },
]

export const loanPackList = [
  {
    img: argibank,
    type: 'Vay tiêu dùng',
    title: 'VAY TIÊU DÙNG THÔNG THƯỜNG',
    lai: '12%',
    hanmuc: '300',
    thoihan: '108 tháng',
    duyet: '3'
  },
  {
    img: sacom,
    type: 'Vay tiêu dùng',
    title: 'VAY TIÊU DÙNG NHANH    ',
    lai: '1.3%/tháng',
    hanmuc: '70 triệu đồng    ',
    thoihan: '36 tháng',
    duyet: 'Trong ngày'
  },
  {
    img: jaccs,
    type: 'Vay trả góp',
    title: 'CHO VAY MUA NỘI THẤT    ',
    lai: 'Lãi suất thấp nhất (theo...',
    hanmuc: '80.000.000 VND',
    thoihan: '36 Tháng',
    duyet: '15 phút ~ 60 phút'
  },
  {
    img: hdbank120x50,
    type: 'Cho vay mua ô tô    ',
    title: 'VAY TIỀN PHÁT LỘC',
    lai: 'Thời gian cố định LSCV...',
    hanmuc: 'Theo quy định của...',
    thoihan: 'Theo quy định của...',
    duyet: 'Theo quy định của...'
  },
  {
    img: oceanbank120x50,
    type: 'Cho vay kinh doanh thương mại, dịch vụ',
    title: 'SẢN PHẨM CHO VAY KINH DOANH CHỢ ĐỐI VỚI KHCN - EASY MART',
    lai: '11%    ',
    hanmuc: '800.000.000 VND',
    thoihan: '84 Tháng',
    duyet: '3 Ngày'
  },
  {
    img: argibank,
    type: 'Vay sản xuất kinh doanh    ',
    title: 'VAY SẢN XUẤT KINH DOANH TRUNG, DÀI HẠN',
    lai: '10%',
    hanmuc: '5 tỷ    ',
    thoihan: '120',
    duyet: '10'
  },
  {
    img: lpbank,
    type: 'Vay sản xuất kinh doanh    ',
    title: 'ƯU ĐÃI LÃI SUẤT CHO VAY SẢN XUẤT KINH DOANH NGẮN HẠN DÀNH CHO KHÁCH HÀNG CÁ NHÂN, KHÁCH HÀNG DOANH NGHIỆP',
    lai: 'Lãi suất ưu đãi chỉ từ...',
    hanmuc: 'Quy mô 10.000 tỷ đồng    ',
    thoihan: 'Ngắn hạn',
    duyet: 'Không quy định'
  },
  {
    img: pgbank120x50,
    type: 'Cho vay mua nhà/đất    ',
    title: 'CHO VAY MUA, XÂY DỰNG/SỬA CHỮA NHÀ ĐẤT',
    lai: '7.99%',
    hanmuc: '80% tổng nhu cầu vốn    ',
    thoihan: '300 Tháng',
    duyet: 'Chỉ từ 01 ngày'
  },
  {
    img: argibank,
    type: 'Vay khác  ',
    title:
      'CHO VAY PHỤC VỤ CHÍNH SÁCH PHÁT TRIỂN NÔNG NGHIỆP NÔNG THÔN THEO NGHỊ ĐỊNH 55/2015/NĐ-CP CỦA THỦ TƯỚNG CHÍNH PHỦ',
    lai: ' Lãi suất cho vay phục...',
    hanmuc: 'Agribank nơi cho vay và...   ',
    thoihan: 'Agribank nơi cho vay và...',
    duyet: 'Theo quy định của...'
  },
  {
    img: argibank,
    type: 'Cho vay kinh doanh thương mại, dịch vụ    ',
    title: 'CHO VAY SẢN XUẤT KINH DOANH',
    lai: ' 8.5%',
    hanmuc: '5.000.000.000   ',
    thoihan: '12 tháng',
    duyet: '3-7    '
  }
]
export const cardPackList = [
  {
    img: vpbank120x50,
    type: 'Thẻ tiêu chuẩn',
    title: 'PHÁT HÀNH THẺ TÍN DỤNG KHÔNG CÓ TSĐB CHO KHCN CÓ NGUỒN THU TỪ LƯƠNG',
    lai: 'Theo dòng thẻ ',
    hanmuc: '1 triệu đồng - 500...',
    thoihan: '5 Năm',
    duyet: 'Nếu hồ sơ cung cấp đầy...'
  },
  {
    img: nama120x50,
    type: 'Thẻ vàng',
    title: 'MASTERCARD ',
    lai: '15 - 27%',
    hanmuc: '1.000.000.000 VND  ',
    thoihan: '3 Năm',
    duyet: '3 Ngày'
  },
  {
    img: baoviet120x50,
    type: 'Thẻ tiêu chuẩn',
    title: 'THẺ TÍN DỤNG NỘI ĐỊA',
    lai: '18%',
    hanmuc: '2.000.000.000 VND',
    thoihan: '5 Năm',
    duyet: 'Thời gian nhận thẻ: sau...'
  },
  {
    img: vpbank120x50,
    type: 'Thẻ tiêu chuẩn',
    title:
      'PHÁT HÀNH THẺ TÍN DỤNG CÓ TSĐB CHO KHCN CÓ TSĐB LÀ TIỀN GỬI TIẾT KIỆM/CHỨNG CHỈ TIỀN GỬI GHI DANH TẠI VPBANK',
    lai: 'Theo dòng thẻ đượ...',
    hanmuc: '10 triệu đồng và...',
    thoihan: '5 Năm',
    duyet: 'Nếu hồ sơ cung cấp đầy...'
  },
  {
    img: nama120x50,
    type: 'Thẻ tiêu chuẩn',
    title: 'JCB',
    lai: '15 - 27%',
    hanmuc: '800.000.000 VND',
    thoihan: '84 Tháng',
    duyet: '3 Ngày'
  },
  {
    img: hdbank120x50,
    type: 'Thẻ tiêu chuẩn ',
    title: 'THẺ TÍN DỤNG QUỐC TẾ HDBANK VISA HẠNG CHUẨN',
    lai: '25%    ',
    hanmuc: 'Từ 10.000.000 đến...   ',
    thoihan: '3 Năm',
    duyet: 'Thời gian phê duyệt...'
  },
  {
    img: vpbank120x50,
    type: 'Thẻ tiêu chuẩn   ',
    title:
      'PHÁT HÀNH THẺ TÍN DỤNG KHÔNG TSĐB CHO KHCN CÓ CHỨNG TỪ CHỨNG MINH THU NHẬP LÀ THẺ TÍN DỤNG MỞ TẠI NGÂN HÀNG KHÁC, HỢP ĐỒNG BẢO HIỂM NHÂN THỌ, HỘ CHIẾU ĐI DU LỊCH NƯỚC NGOÀI.',
    lai: 'Theo dòng thẻ được...',
    hanmuc: '1 triệu đồng - 500...    ',
    thoihan: '5 Năm',
    duyet: 'Nếu hồ sơ cung cấp đầy...'
  },
  {
    img: hdbank120x50,
    type: 'Thẻ vàng ',
    title: 'THẺ HDBANK FLEX CARD GOLD',
    lai: '7.99%',
    hanmuc: '80% tổng nhu cầu vốn    ',
    thoihan: '300 Tháng',
    duyet: 'Chỉ từ 01 ngày'
  },
  {
    img: baoviet120x50,
    type: 'Thẻ tiêu chuẩn  ',
    title: 'THẺ TÍN DỤNG QUỐC TẾ VISA',
    lai: ' 20%',
    hanmuc: '500.000.000 VND  ',
    thoihan: '2 Năm',
    duyet: 'Thời gian nhận thẻ: sau...'
  },
  {
    img: nama120x50,
    type: 'Thẻ khác ',
    title: 'THẺ VISA TRAVEL',
    lai: ' 28%',
    hanmuc: 'Linh động  ',
    thoihan: '3 Năm',
    duyet: '5-7 ngày    '
  }
]

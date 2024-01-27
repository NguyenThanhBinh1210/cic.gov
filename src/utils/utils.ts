export function formatTime(isoString: string) {
  // Tạo đối tượng Date từ chuỗi thời gian
  const dateObject = new Date(isoString)

  // Lấy thông tin giờ, phút, ngày, tháng và năm
  const hours = dateObject.getHours()
  const minutes = dateObject.getMinutes()
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // Tháng bắt đầu từ 0, cần cộng thêm 1
  const year = dateObject.getFullYear()

  // Tạo định dạng giờ:phút ngày/tháng/năm
  const formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`

  return formattedDateTime
}

export function tachDoanVan(nguyenVanBan?: string) {
  const mangTu = nguyenVanBan?.split(' ')
  if (Number(mangTu?.length) > 3) {
    const baChuCaiDau = mangTu?.slice(0, 3).join(' ')
    return baChuCaiDau + '...'
  } else {
    return nguyenVanBan
  }
}

import BaseModal from '~/components/Modal/BaseModal'

const RechargeModal = ({ showRecharge, onCloseRecharge }: { showRecharge: boolean; onCloseRecharge: () => void }) => {
  return (
    <BaseModal show={showRecharge} onClose={onCloseRecharge}>
      <div className=' max-w-[945px] mx-auto rounded overflow-hidden'>
        <div className='p-4 bg-[#333399] font-medium text-white text-2xl pl-6'>Rút tiền</div>
        <div className='p-4 bg-white border-b'>
          <div>
            <span>Số dư hiện có:</span>
            <span className='ml-1 font-bold'>414.434 ₫</span>
          </div>
          <div className='flex flex-col mb-4 mt-4'>
            <div className='w-[110px] md:w-[150px] mb-1 '>Số tiền cần rút:</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-[300px] ' placeholder='Nhập số tiền' />
              </div>
            </div>
          </div>
          <div>
            <span>Số tiền rút tối thiểu:</span>
            <span className='ml-1 font-bold'>100.000 ₫</span>
          </div>
        </div>
        <div className='p-4 bg-white flex items-center justify-between'>
          <button className='bg-[#333399] text-white  py-1.5 px-3 rounded-md'>Rút hết</button>
          <div className='flex items-center gap-2'>
            <button onClick={onCloseRecharge} className='bg-gray-600 text-white  py-1.5 px-3 rounded-md'>
              Đóng
            </button>
            <button className='bg-[#4545d4] text-white  py-1.5 px-3 rounded-md'>Rút</button>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export default RechargeModal

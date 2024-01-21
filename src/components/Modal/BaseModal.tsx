const BaseModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className={`w-full h-full fixed top-0 left-0 bg-slate-900 transition-all ${
        show ? '0 bg-opacity-30 visible' : 'bg-opacity-0 invisible'
      }`}
    ></div>
  )
}

export default BaseModal

const BaseModal = ({ show, onClose, children }: { show: boolean; onClose: () => void; children?: React.ReactNode }) => {
  return (
    <div
      onClick={onClose}
      className={`w-full  flex items-center px-3 justify-center z-50 h-full fixed top-0 left-0 bg-slate-900 transition-all ${show ? 'bg-opacity-30 visible' : 'bg-opacity-0 invisible'
        }`}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}

export default BaseModal

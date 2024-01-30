/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Chip } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getClientCode, getFashionCode, getProductCode } from '~/apis/payment.api'

const XuHuong = () => {
  const data = [
    {
      label: 'Yêu cầu cấp hạn mức',
      value: '1'
    },
    {
      label: 'Yêu cầu hạn mức',
      value: '2'
    },

    {
      label: 'Yêu cầu nâng cấp hạn mức',
      value: '3'
    }
  ]
  const [filData, setFilData] = useState<any>(data)
  const [clientCode, setClientCode] = useState<any>()
  const [fashionCode, setFashionCode] = useState<any>()
  const [productCode, setProductCode] = useState<any>()
  useEffect(() => {
    setFilData([
      {
        ...data[0],
        children: clientCode
      },
      {
        ...data[1],
        children: fashionCode
      },
      {
        ...data[2],
        children: productCode
      }
    ])
  }, [clientCode, fashionCode, productCode])
  useQuery({
    queryKey: ['get-client-code'],
    queryFn: () => {
      return getClientCode()
    },
    onSuccess: (data) => {
      setClientCode(data.data)
    }
  })
  useQuery({
    queryKey: ['get-fashion-code'],
    queryFn: () => {
      return getFashionCode()
    },
    onSuccess: (data) => {
      setFashionCode(data.data)
    }
  })
  useQuery({
    queryKey: ['get-product-code'],
    queryFn: () => {
      return getProductCode()
    },
    onSuccess: (data) => {
      setProductCode(data.data)
    }
  })
  return (
    <div className='py-3 md:py-10 px-3 md:px-10'>
      <h2 className='text-center text-3xl uppercase font-medium mb-3'>Xu hướng</h2>
      <Tabs id='custom-animation' value='1'>
        <TabsHeader placeholder={''} className='flex flex-col md:flex-row'>
          {data.map(({ label, value }) => (
            <Tab placeholder={''} key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className='mt-3 '
          placeholder={''}
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 }
          }}
        >
          {filData.map(({ value, children }: any) => (
            <TabPanel className='p-0 ' key={value} value={value}>
              <div className='overflow-x-auto'>
                <table className='w-full border'>
                  <thead>
                    <tr className='bg-[#f5f5f5] w-max'>
                      <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                        <div className='w-max md:w-full'>Phiên giao dịch</div>
                      </th>
                      <th
                        colSpan={5}
                        className='p-2 text-[12px] md:p-[15px] font-medium   border-r md:text-[13px] border-b'
                      >
                        <div className='w-full '>Mã Nhận Thưởng</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' overflow-y-auto'>
                    {children?.map((item: any, index: any) => (
                      <tr key={index} className='border-b'>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          {' '}
                          {item?.fashionPlus || item?.productCodePlus || item?.clientCodePlus || '0000000'}
                        </td>
                        {Array.from(String(item?.randomNumber || '00000'), Number).map((i, d) => (
                          <td key={d} className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                            <Chip color='blue' className='w-max mx-auto' value={i} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default XuHuong

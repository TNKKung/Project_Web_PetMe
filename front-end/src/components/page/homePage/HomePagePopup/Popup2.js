import './Popup2.scoped.css'
import Input from '../../../Input/Input'
import React, { useState } from 'react'

function Popup2({ popup1, popup2, popupFinish }) {
  const [form, setForm] = useState({
    petId: null,
    dogBreed: null,
    gender: null,
    age: null,
    petDetail: null,
    cost: null,
    nameAccountPromtpay: null,
    detailAccountPromtpay: null,
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  })

  return (
    <div className='box-large'>
      <div className='popup-closeButton' onClick={popup2.close}>
        X
      </div>
      <div className='top-box'>
        <div className='left-box'>
          <div className='header'>
            <div className='text-head'>ลงทะเบียนขายสุนัข</div>
            {/* เลือกรูปแบบการการันตี */}
            <select
              className='selector padding'
              value={form.petId}
              onChange={(e) => {
                setForm({ ...form, petId: e.target.value })
              }}
            >
              <option value='เลือกรูปแบบการการันตี'>
                เลือกรูปแบบการการันตี
              </option>
              <option value='แบบที่1'>แบบที่1</option>
              <option value='แบบที่2'>แบบที่2</option>
            </select>
          </div>

          <div className='line' />
          <div className='text-input-box'>
            <div className='text-box'>
              <div className='text-origin'>สุนัขพันธุ์</div>
              <div className='text-origin'>เพศ</div>

              <div className='text-origin'>อายุ</div>
              <div className='text-origin'>ราคา</div>
            </div>
            <div className='input-box'>
              <select
                className='selector'
                value={form.dogBreed}
                onChange={(e) => {
                  setForm({ ...form, dogBreed: e.target.value })
                }}
              >
                <option value='เลือกพันธุ์สุนัข'>เลือกพันธุ์สุนัข</option>
                <option value='ปอมเมอเรเนี่ยน'>ปอมเมอเรเนี่ยน</option>
                <option value='โกลเด้นรีทรีฟเวอร์'>โกลเด้นรีทรีฟเวอร์</option>
                <option value='ชิสุ'>ชิสุ</option>
                <option value='ปั๊ก'>ปั๊ก</option>
                <option value='ไซบีเรียน ฮัสกี้'>ไซบีเรียน ฮัสกี้</option>
                <option value='ร็อตต์ไวเลอร์'>ร็อตต์ไวเลอร์</option>
                <option value='บูลล์ด็อก'>บูลล์ด็อก</option>
                <option value='ยอร์กไชร์เทอร์เรีย'>ยอร์กไชร์เทอร์เรีย</option>
                <option value='บีเกิ้ล'>บีเกิ้ล</option>
                <option value='ชิวาวา'>ชิวาวา</option>
              </select>
              <select
                className='selector'
                value={form.gender}
                onChange={(e) => {
                  setForm({ ...form, gender: e.target.value })
                }}
              >
                <option value='เลือกเพศ'>เลือกเพศ</option>
                <option value='เพศผู้'>เพศผู้</option>
                <option value='เพศเมีย'>เพศเมีย</option>
              </select>

              <Input
                type='number'
                value={form.age}
                onChange={(e) => {
                  setForm({ ...form, age: e.target.value })
                }}
              />
              <Input
                type='number'
                value={form.cost}
                onChange={(e) => {
                  setForm({ ...form, cost: e.target.value })
                }}
              />
            </div>
          </div>
          <div className='detail'>รายละเอียด :</div>
          {/* <div className='input-detail' /> */}
          <textarea
            className='input-detail'
            // rows='4'
            // cols='50'
            value={form.petDetail}
            onChange={(e) => {
              setForm({ ...form, petDetail: e.target.value })
            }}
          />
        </div>
        <div className='right-box'>
          <div className='addPicture'>เพิ่มรูปภาพ</div>
          <input type='file' className='uploadPicture' />
          <div className='line2' />
          <div className='show-picture-cover'>
            <div className='show-picture' />
            <div className='show-picture' />
            <div className='show-picture' />
            <div className='show-picture' />
          </div>
          <div className='text-input-box'>
            <div className='text-box-2'>
              <div className='text-origin-2'>ชื่อบัญชี</div>
              <div className='text-origin-2'>รายละเอียด</div>
            </div>
            <div className='input-box-2'>
              <Input
                className='margin'
                value={form.nameAccountPromtpay}
                onChange={(e) => {
                  setForm({ ...form, nameAccountPromtpay: e.target.value })
                }}
              />
              <textarea
                className='textArea-detailAccount'
                rows='3'
                // cols='50'
                value={form.detailAccountPromtpay}
                onChange={(e) => {
                  setForm({ ...form, detailAccountPromtpay: e.target.value })
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-box'>
        <div className='text-head'>สร้างแบบสอบถามสำหรับคัดเลือกผู้ซื้อ</div>
        <div className='line-bottom' />
        <div className='text-input-bottom'>
          <div className='text-box-bottom'>
            <div className='text-bottom'>คำถามข้อที่ 1</div>
            <div className='text-bottom'>คำถามข้อที่ 2</div>
            <div className='text-bottom'>คำถามข้อที่ 3</div>
            <div className='text-bottom'>คำถามข้อที่ 4</div>
            <div className='text-bottom'>คำถามข้อที่ 5</div>
          </div>
          <div className='input-box-bottom'>
            <textarea
              className='input-bottom'
              // rows='4'
              // cols='50'
              value={form.question1}
              onChange={(e) => {
                setForm({ ...form, question1: e.target.value })
              }}
            />
            <textarea
              className='input-bottom'
              // rows='4'
              // cols='50'
              value={form.question2}
              onChange={(e) => {
                setForm({ ...form, question2: e.target.value })
              }}
            />
            <textarea
              className='input-bottom'
              // rows='4'
              // cols='50'
              value={form.question3}
              onChange={(e) => {
                setForm({ ...form, question3: e.target.value })
              }}
            />
            <textarea
              className='input-bottom'
              // rows='4'
              // cols='50'
              value={form.question4}
              onChange={(e) => {
                setForm({ ...form, question4: e.target.value })
              }}
            />
            <textarea
              className='input-bottom'
              // rows='4'
              // cols='50'
              value={form.question5}
              onChange={(e) => {
                setForm({ ...form, question5: e.target.value })
              }}
            />
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='text-footer'>
          หมายเหตุ : สามารถตั้งคำถามได้มากสุด 5 ข้อ
        </div>
        <div
          className='footer-button'
          onClick={() => {
            popup1.close()
            popup2.close()
            popupFinish.open()
            console.table(form)
          }}
        >
          ลงทะเบียนสุนัข
        </div>
      </div>
    </div>
  )
}

export default Popup2

/* sheet.js — แบบฟอร์มใบสมัคร A4 ที่ใช้ร่วมกันระหว่างหน้าสมัครและหน้า admin */
(function(){
const LOGO_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAABIFBMVEXaqiTu45ne0djOoy6wmSnYsUy4mVP112Z8eAq3iBv/fwDInjGqnE+ldyDbrSakeC+5lTCaW6C7k8DzwB7/AADJt5ttY1+Xb08QFHL//3AfJTG7pKQAAP//f38KAKZlLi5gEWBtZJHGlEk4VRwkSEgA/wBVAP+OP5acekCRbZG2lkHImkH+/v4AAADSpizptRnquCXv6O3YpxnMqE3Rt2/l1+ayh7fQt9PHp8rIminWtVOpd67ZxdrXxZL9+K3Zyqr15pDp49fk28ujaanx1nHo2IvirRbsxlCVVZvaxHHPuorxwSr//wC4lbzkyW69l8GSSpmbWaLCmsXc0rTJrGm3iijLmRudZKPh1bf/qlXcsjG7kzHVqSrXqinhzOL/qgA8NCekAAAAYHRSTlPh//9gHf///wT/AjAO/6oPVf///wH/CBADAgb/AQIDBQQHIwkHAQP//wdmQv8A/v78//7//////////////////////////v/////+Af///////////////wP7/46u/wMnZU5vAABBCElEQVR42tV9CWPaSLauwAbsJE466fQ2Pcu99+3v4UKl0r6AQBJCYMDsjrGd//8v3jklCSSxupOeO5eZ7k68gL4623eWqhJu/7mvz3d3V1dv3txd3t29eXN1dXf3+Z/8AMI/C+ebyy9fv97d7fne3devXy7f/LOQ//mAry6/fNni/PXD5eVb+D/8g//+8Mu/ZYB/ubz6/F8a8N27L18TnJdvLy4unp7fC8KjuH09PgrC++enp4uLt5f/SH7ny7u7/5KA7y5juf56iUAFhDcYDGKcjeSFf/4Rv45/EN4D7su/8F/++uXqvxbgNzFYEOt7lCgAanCUXQlfZPPif5Vi7IMfBxz2xf97F0v6zX8VwHdcjX8BuSKKHxOghDAmy32n1Zp1Om18dTqdWavl9GWZMY49xg2whacLDvrr5ed/ecBvEO3fLy+eCTw7YkWopuzMOrR+5EU7M0eeM4DdjTWdPF+8/RUxv/lXBnz1Bf7117dPAsoJ5UrI3Jm162e/EDYIW4jtW3jiJv197fk7Ar5Eu728ALRorxJhcqtT/wOvTksGUcNbgFELT2+5t//8Lwf4DoX77kJooIMC0TLnD4HdgHYAc5crt3Bx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";
const MONTHS = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
const CSS = `.sheet{width:794px;height:1123px;background:#fff;color:#000;font-family:"Sarabun","Tahoma",sans-serif;font-size:14.5px;line-height:1;padding:30px 44px 0 50px;position:relative}
.sheet .hd{display:flex;align-items:flex-start;gap:12px;height:138px}
.sheet .logo{width:80px;height:80px;flex:none;border-radius:50%;display:grid;place-items:center;overflow:hidden}
.sheet .logo.empty{border:1px dashed #bbb;color:#999;font-size:11px}
.sheet .logo img{width:100%;height:100%;object-fit:contain}
.sheet .ttl{flex:1;text-align:center;padding-top:4px;min-width:0}
.sheet .ttl h2{font-size:17px;font-weight:700;margin:0 0 8px}
.sheet .ttl h3{font-size:15px;white-space:nowrap;font-weight:700;margin:0 0 10px}
.sheet .codes{display:flex;align-items:center;gap:6px;justify-content:flex-end;margin-top:6px}
.sheet .boxes{display:flex;gap:6px}
.sheet .boxes i{width:21px;height:23px;border:1px solid #000;font-style:normal;display:grid;place-items:center;font-size:14px}
.sheet .pic{width:104px;height:124px;border:1px solid #000;flex:none;margin-top:-4px;overflow:hidden;display:grid;place-items:center}
.sheet .pic img{width:100%;height:100%;object-fit:cover}
.sheet .lvl{display:flex;align-items:flex-end;margin-top:6px;position:absolute;left:50px;top:128px;width:196px}
.sheet h4{font-size:16px;font-weight:700;margin:0 0 10px}
.sheet .r{display:flex;align-items:flex-end;height:28px;white-space:nowrap}
.sheet .f{flex:1;border-bottom:1.4px dotted #000;height:20px;padding:0 4px;text-align:center;font-weight:600;font-size:14px;overflow:hidden;white-space:nowrap;margin:0 3px;line-height:18px}
.sheet .f.l{text-align:left}
.sheet .note{font-size:14px;line-height:1.72;text-indent:110px;margin:8px 0 0;text-align:left}
.sheet .sign{width:310px;margin:4px 0 0 auto;text-align:center;font-size:14px}
.sheet .sign .r{height:27px}
.sheet .sigimg{height:42px;margin-bottom:-14px;display:block;margin-left:auto;margin-right:auto;max-width:170px;object-fit:contain}
.sheet .foot{position:absolute;left:0;right:0;top:872px;border-top:1.4px solid #000;display:grid;grid-template-columns:1fr 1fr;height:251px}
.sheet .foot > div{padding:8px 14px 0 44px;font-size:13.5px}
.sheet .foot > div + div{border-left:1px solid #000;padding-left:26px;padding-right:40px}
.sheet .foot .t{text-align:center;margin-bottom:8px}
.sheet .cg{display:grid;grid-template-columns:1fr 1fr;row-gap:7px;column-gap:6px}
.sheet .cb{display:flex;align-items:center;gap:6px;white-space:nowrap}
.sheet .cb i{width:16px;height:16px;border:1px solid #000;font-style:normal;display:grid;place-items:center;font-size:13px;font-weight:700;flex:none}
.sheet .foot .r{height:24px}
.sheet .foot .f{font-size:13px}

.sheet .pic:empty{background:#fff}
@media print{
  @page{size:A4;margin:0}
  html,body{background:#fff!important;margin:0!important;padding:0!important;height:297mm!important;overflow:hidden!important}
  body *{visibility:hidden!important}
  .print-area,.print-area *{visibility:visible!important}
  .print-area{position:fixed!important;left:0!important;top:0!important;transform:none!important;width:210mm!important;height:297mm!important;margin:0!important;box-shadow:none!important}
}`;
const HTML = `<div class="sheet">
            <div class="hd">
              <div class="logo" data-el="logo"></div>
              <div class="ttl">
                <h2>ใบสมัครขึ้นทะเบียนเป็นนักศึกษา</h2>
                <h3>หลักสูตรการศึกษานอกระบบระดับการศึกษาขั้นพื้นฐาน พุทธศักราช 2551</h3>
                <div class="codes">รหัสสถานศึกษา <span class="boxes" data-boxes="school_code"></span></div>
                <div class="codes" style="margin-top:8px">รหัสประจำตัวนักศึกษา <span class="boxes" data-boxes="student_code"></span></div>
              </div>
              <div class="pic" data-el="pic"></div>
            </div>
            <div class="lvl r">ระดับ<b class="f" data-v="level"></b></div>
            <h4 style="margin-top:14px">ประวัตินักศึกษา</h4>
            <div class="r">สถานศึกษา<b class="f" style="flex:2.2" data-v="school"></b>อำเภอ<b class="f" data-v="school_amphoe"></b>จังหวัด<b class="f" data-v="school_prov"></b></div>
            <div class="r">ศกร./ศรช./ศศช.<b class="f" style="flex:2" data-v="center"></b>รหัสกลุ่ม<b class="f" style="flex:2.4" data-v="group"></b></div>
            <div class="r">ชื่อ<b class="f" data-v="fname"></b>นามสกุล<b class="f" data-v="lname"></b></div>
            <div class="r">วัน เดือน ปี เกิด<b class="f" data-v="dob_d"></b>/<b class="f" style="flex:2" data-v="dob_mname"></b>/<b class="f" data-v="dob_y"></b>อายุ<b class="f" style="flex:.6" data-v="age_y"></b>ปี<b class="f" style="flex:.6" data-v="age_m"></b>เดือน (นับถึงวันขึ้นทะเบียน)</div>
            <div class="r">เลขบัตรประจำตัวประชาชน<b class="f" data-v="cid_fmt"></b></div>
            <div class="r">ศาสนา<b class="f" data-v="religion"></b>สัญชาติ<b class="f" data-v="nation"></b>อาชีพ<b class="f" style="flex:1.4" data-v="job"></b>รายได้เฉลี่ยปีละ<b class="f" style="flex:1.3" data-v="income_fmt"></b>บาท</div>
            <div class="r">ชื่อ-สกุลบิดา<b class="f" style="flex:3" data-v="father"></b>สัญชาติ<b class="f" data-v="father_nat"></b>อาชีพ<b class="f" data-v="father_job"></b></div>
            <div class="r">ชื่อ-สกุลมารดา<b class="f" style="flex:3" data-v="mother"></b>สัญชาติ<b class="f" data-v="mother_nat"></b>อาชีพ<b class="f" data-v="mother_job"></b></div>
            <div class="r">ความรู้เดิมจบชั้น<b class="f" style="flex:1.6" data-v="prev_grade"></b>ปี พ.ศ. ที่จบ<b class="f" data-v="prev_year"></b>จากสถานศึกษา<b class="f" style="flex:1.6" data-v="prev_school"></b></div>
            <div class="r">อำเภอ/เขต<b class="f" style="flex:1.4" data-v="prev_amphoe"></b>จังหวัด<b class="f" data-v="prev_prov"></b></div>
            <div class="r">วุฒิทางธรรม<b class="f" data-v="dharma"></b>ปี พ.ศ. ที่จบ<b class="f" data-v="dharma_year"></b>จาก<b class="f" style="flex:1.4" data-v="dharma_from"></b></div>
            <div class="r">ที่อยู่ปัจจุบัน สามารถติดต่อได้สะดวก บ้านเลขที่<b class="f" data-v="h_no"></b>หมู่ที่<b class="f" data-v="h_moo"></b>ซอย<b class="f" data-v="h_soi"></b>ถนน<b class="f" data-v="h_road"></b></div>
            <div class="r">ตำบล/แขวง<b class="f" data-v="h_tambon"></b>อำเภอ/เขต<b class="f" style="flex:1.3" data-v="h_amphoe"></b>จังหวัด<b class="f" data-v="h_prov"></b></div>
            <div class="r">รหัสไปรษณีย์<b class="f" data-v="h_zip"></b>หมายเลขโทรศัพท์<b class="f" data-v="phone"></b></div>
            <p class="note">ข้าพเจ้าขอรับรองว่าข้อความข้างต้นนี้เป็นความจริงทุกประการ และมีคุณสมบัติตามหลักสูตรการศึกษานอกระบบระดับการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 และไม่อยู่ในระหว่างการศึกษาในระบบโรงเรียนทุกสังกัดตลอดระยะเวลาที่เรียน ตามหลักสูตรการศึกษานอกระบบระดับการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 หากตรวจสอบภายหลังพบว่าหลักฐานของข้าพเจ้าไม่ถูกต้อง ไม่ตรงกับความเป็นจริง หรือมีคุณสมบัติไม่ครบถ้วน หรือไม่มีหลักฐานมาแสดงตามเวลาที่กำหนด ข้าพเจ้ายินยอมให้คัดชื่อออก และหากตรวจสอบพบภายหลังที่จบหลักสูตรไปแล้ว ข้าพเจ้ายินยอมให้สถานศึกษาประกาศยกเลิกหลักฐานการศึกษา แล้วแต่กรณี รวมทั้งไม่เรียกร้องค่าเสียหายหรือค่าใช้จ่ายใด ๆ ทั้งสิ้น</p>
            <div class="sign">
              <div class="r">ลงชื่อ<b class="f" data-el="sig"></b>ผู้สมัคร</div>
              <div class="r" style="padding-right:46px">(<b class="f" data-v="full_name"></b>)</div>
              <div class="r">วันที่<b class="f" style="flex:.6" data-v="today_d"></b>เดือน<b class="f" style="flex:1.6" data-v="today_m"></b>พ.ศ.<b class="f" style="flex:.8" data-v="today_y"></b></div>
            </div>
            <div class="foot">
              <div>
                <div class="t">หลักฐาน/เอกสารที่ยื่นในวันสมัคร</div>
                <div class="cg">
                  <span class="cb"><i data-c="d_cert"></i>วุฒิเดิม</span>
                  <span class="cb"><i data-c="d_house"></i>สำเนาทะเบียนบ้าน</span>
                  <span class="cb"><i data-c="d_photo"></i>รูปถ่าย<b class="f" style="flex:0 0 46px" data-v="d_photo_n"></b>รูป</span>
                  <span class="cb"><i data-c="d_idcard"></i>สำเนาบัตรประจำตัวประชาชน</span>
                  <span class="cb"><i data-c="d_father"></i>เอกสารบิดา</span>
                  <span class="cb"><i data-c="d_mother"></i>เอกสารมารดา</span>
                </div>
                <div class="r" style="margin-top:2px"><span class="cb"><i data-c="d_other_on"></i>อื่น ๆ ระบุ</span><b class="f l" data-v="d_other"></b></div>
                <div style="margin-top:22px">
                  <div class="r">ลงชื่อ<b class="f"></b>ผู้รับสมัคร</div>
                  <div class="r">ลงชื่อ<b class="f"></b>ผู้ตรวจสอบ</div>
                </div>
              </div>
              <div>
                <div class="t">บันทึกเพิ่มเติมต้องนำหลักฐานมาแสดงเพิ่มเติมภายใน</div>
                <div class="r" style="justify-content:center;height:22px;margin:-4px 0 8px">วันที่<b class="f" style="flex:0 0 52px"></b>เดือน<b class="f" style="flex:0 0 90px"></b>พ.ศ.<b class="f" style="flex:0 0 60px"></b></div>
                <div class="cg">
                  <span class="cb"><i></i>วุฒิเดิม (ฉบับจริง)</span>
                  <span class="cb"><i></i>สำเนาบัตรประจำตัวประชาชน</span>
                  <span class="cb"><i></i>สำเนาทะเบียนบ้าน</span>
                  <span class="cb"><i></i>หลักฐานการเปลี่ยนชื่อ-นามสกุล</span>
                  <span class="cb"><i></i>เอกสารบิดา</span>
                  <span class="cb"><i></i>เอกสารมารดา</span>
                </div>
                <div class="r" style="margin-top:2px"><span class="cb"><i></i>อื่น ๆ ระบุ</span><b class="f"></b></div>
                <div style="margin-top:6px">
                  <div class="r">ลงชื่อ<b class="f"></b>ผู้รับสมัคร</div>
                  <div class="r">ลงชื่อ<b class="f"></b>ครู สกร. ผู้รับรอง</div>
                  <div class="r">ลงชื่อ<b class="f"></b>ผู้สมัคร</div>
                </div>
              </div>
            </div>
          </div>`;

const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

/* รองรับ 2 แบบ: เลขบัตรประชาชน 13 หลัก หรือรหัส G (G ตามด้วยตัวเลข 12 หลัก) */
function isG(v){ return /^\s*g/i.test(String(v||"")); }
function fmtCid(v){
  if (isG(v)) return "G" + String(v).replace(/\D/g,"").slice(0,12);
  const d = String(v||"").replace(/\D/g,"").slice(0,13);
  return [d.slice(0,1),d.slice(1,5),d.slice(5,10),d.slice(10,12),d.slice(12,13)].filter(Boolean).join("-");
}
function cidValid(v){
  if (isG(v)) return /^G\d{12}$/.test(fmtCid(v));
  const d = String(v||"").replace(/\D/g,"");
  if (d.length !== 13) return false;
  let sum = 0; for (let i=0;i<12;i++) sum += +d[i]*(13-i);
  return (11 - sum % 11) % 10 === +d[12];
}
function ageAt(d, m, yBE, now){
  const y = yBE - 543;
  let years = now.getFullYear() - y, months = (now.getMonth()+1) - m;
  if (now.getDate() < d) months--;
  if (months < 0){ years--; months += 12; }
  return (years >= 0 && years < 130) ? {years, months} : null;
}
function ageOf(s, now){
  const yb = parseInt(s.dob_y,10);
  return (s.dob_d && s.dob_m && yb > 2400) ? ageAt(+s.dob_d, +s.dob_m, yb, now) : null;
}
function esc(v){ return String(v).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function safeImg(src){ return /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(src||"") ? src : ""; }

function mount(container){
  container.insertAdjacentHTML("beforeend", HTML);
  const el = container.lastElementChild;
  el.querySelector('[data-el="logo"]').innerHTML = '<img src="' + LOGO_SRC + '" alt="">';
  return el;
}

/* s = ข้อมูลในฟอร์ม, opts = {photo, sig, date} */
function fill(el, s, opts){
  s = s || {}; opts = opts || {};
  const now = opts.date ? new Date(opts.date) : new Date();
  const age = ageOf(s, now);
  const ext = Object.assign({}, s);
  ext.dob_mname = s.dob_m ? MONTHS[s.dob_m-1] : "";
  ext.age_y = age ? String(age.years) : ""; ext.age_m = age ? String(age.months) : "";
  ext.cid_fmt = fmtCid(s.cid);
  ext.income_fmt = s.income ? (Number(String(s.income).replace(/,/g,"")) || s.income).toLocaleString("th-TH") : "";
  ext.full_name = [s.fname, s.lname].filter(Boolean).join(" ");
  ext.today_d = String(now.getDate()); ext.today_m = MONTHS[now.getMonth()]; ext.today_y = String(now.getFullYear()+543);
  ext.d_other_on = !!s.d_other;
  ext.d_photo_n = s.d_photo ? (s.d_photo_n || "") : "";
  el.querySelectorAll("[data-v]").forEach(n => n.textContent = ext[n.dataset.v] || "");
  el.querySelectorAll("[data-c]").forEach(n => n.textContent = ext[n.dataset.c] ? "✓" : "");
  el.querySelectorAll("[data-boxes]").forEach(n => {
    const v = String(ext[n.dataset.boxes]||"").replace(/\s/g,"");
    n.innerHTML = Array.from({length:10},(_,i)=>"<i>" + esc(v[i]||"") + "</i>").join("");
  });
  const photo = safeImg(opts.photo), sig = safeImg(opts.sig);
  el.querySelector('[data-el="pic"]').innerHTML = photo ? '<img src="' + photo + '" alt="">' : "";
  el.querySelector('[data-el="sig"]').innerHTML = sig ? '<img class="sigimg" src="' + sig + '" alt="">' : "";
  return age;
}

async function toPdf(el){
  if (document.fonts && document.fonts.ready) await document.fonts.ready;
  const host = document.createElement("div");
  host.style.cssText = "position:fixed;left:-10000px;top:0;width:794px;height:1123px;";
  const clone = el.cloneNode(true); clone.style.transform = "none"; clone.classList.remove("print-area");
  host.appendChild(clone); document.body.appendChild(host);
  try {
    const canvas = await html2canvas(clone, {scale: 2.2, backgroundColor: "#ffffff", logging: false});
    const pdf = new window.jspdf.jsPDF({unit:"mm", format:"a4", orientation:"portrait"});
    pdf.addImage(canvas.toDataURL("image/jpeg", .88), "JPEG", 0, 0, 210, 297);
    return pdf;
  } finally { host.remove(); }
}
function fileName(s){
  return ("ใบสมัคร_" + (s.fname||"") + "_" + (s.lname||"") + ".pdf").replace(/\s+/g,"_").replace(/[\\/:*?"<>|]/g,"");
}

window.NFE = { LOGO_SRC, MONTHS, mount, fill, toPdf, fileName, fmtCid, cidValid, ageOf };
})();

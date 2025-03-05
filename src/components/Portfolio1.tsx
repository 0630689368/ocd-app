import Link from "next/link";
import React from "react";

export default function Portforlio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  <Link
                    href="https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                    กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-1-66.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผล</h3>
                <p>
                  <Link
                    href="https://www.beryl8.com/th/newsroom/insights/284/8-%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%9E"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การสร้างความพร้อมในการเปลี่ยนแปลงของสมาชิกในองค์การ
                    การสร้างวิสัยทัศน์
                    การแสวงหาแรงสนับสนุนในการเปลี่ยนแปลงจากกลุ่มผลประโยชน์
                  </Link>
                </p>
                <p>
                  ต้องทำให้สมาชิกขององค์การเห็นความจำเป็นของการเปลี่ยนแปลง
                  ช่วยให้บุคลากรเหล่านี้ลดการต่อต้านการเปลี่ยนแปลง
                  แสดงถึงความมุ่งหมายและความจำเป็นของการเปลี่ยนแปลง
                  มุ่งหวังให้เกิดการเปลี่ยนแปลงขึ้น
                  ผู้บริหารจำเป็นต้องกำหนดวิสัยทัศน์ที่มีความชัดเจน
                  การทำให้บุคคลที่มีอิทธิพลให้ความร่วมมือในขั้นตอนการดำเนินการเปลี่ยนแปลง
                  ทำให้การเปลี่ยนแปลง สามารถดำเนินตามแผนได้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-67-71.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะ
                </h3>
                <p>
                  <Link
                    href="https://stepstraining.co/strategy/how-to-implement-hr-digital-transformation-to-the-organization"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    เป็นที่ชัดเจนว่า เรากำลังเผชิญกับการใช้ชีวิต
                    การทำธุรกิจบนโลกมีลักษณะผันผวน ไม่แน่นอน สลับซับซ้อน
                    และกำกวม หรือที่เรียกว่า VUCA(Volatility, Uncertainty,
                    Complexity และ Ambiguity)
                    อันเนื่องจากผลกระทบจากเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว
                    โดยเฉพาะเทคโนโลยีดิจิทัลที่มีรากเหง้ามาจากเทคโนลีสารสนเทศและการสื่อสาร
                    (ICT: Information and Communication Technology)
                  </Link>
                </p>
                <p>
                  เทคโนโลยีดิจิทัลเป็นหนึ่งในสามเทคโนโลยีสู่ยุคอนาคต
                  ที่รวมถึงเทคโนโลยีชีวภาพ และเทคโนโลยีนาโน
                  ซึ่งคือยุคปฏิวัติอุตสาหกรรมครั้งที่ 4 (4th Industrial
                  Revolution)
                  ที่เกิดการเชื่อมต่อระหว่างคนกับคอมพิวเตอร์อย่างไร้รอยต่อ
                  (Seamless Interaction) อันนำไปสู่จักรวาลนฤมิต หรือ เมตาเวิร์ส
                  (Metaverse)
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-72-75.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.adpt.news/2017/09/13/7-factors-affecting-major-changes-org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  ปรับเพื่อเปลี่ยน ปรับการบริหารการทำงาน
                  เพื่อกระจายอำนาจได้อย่างทั่วถึง
                  เพื่อตอบสนองความต้องการของประชาชน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.pmi.org/learning/library/change-readiness-11126"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การเปลี่ยนแปลงสามารถเริ่มต้นหรือประสบได้ในระดับบุคคล สังคม
                    หรือองค์กร
                    การเข้าใจถึงความพร้อมสำหรับการเปลี่ยนแปลงสามารถทำให้การเดินทางของผู้ที่เกี่ยวข้องง่ายขึ้น
                  </Link>
                </p>
                <p>
                  ความพร้อมสำหรับการเปลี่ยนแปลงอาจเริ่มต้นจากการทำงานเพื่อประเมินคุณค่าในตนเองและความนับถือตนเองของลูกค้า
                  ความรู้สึกว่าตนเองมีค่าต่ำอาจกลายเป็นอุปสรรคต่อการเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-79-82.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://surveysparrow.com/blog/change-management-survey-questions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    แบบสำรวจการจัดการการเปลี่ยนแปลงแบบสนทนาได้รับอัตราการตอบสนองสูงสุด
                    สร้างแบบสำรวจได้อย่างง่ายดายด้วยเทมเพลตสำเร็จรูป
                    นี่คือแบบสำรวจข้อเสนอแนะเกี่ยวกับการจัดการการเปลี่ยนแปลงที่จะช่วยคุณในกระบวนการรวบรวมข้อเสนอแนะและดำเนินการตามนั้น
                  </Link>
                </p>
                <p>การสำรวจการจัดการการเปลี่ยนแปลง</p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-83-85.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    แผนการสื่อสารไม่ใช่จัดทำขึ้นแค่วันหรือสองวันเท่านั้น
                    แผนการสื่อสารที่มีประสิทธิภาพนั้นจะต้องถูกจัดเตรียมขึ้นตลอดทั้งปี
                    ซึ่งในส่วนถัดไปผู้เขียนจะนำเสนอแนวทางการจัดทำแผนการสื่อสารอย่างมีประสิทธิภาพ
                    โดยมีวัตถุประสงค์เพื่อเปลี่ยนแนวคิด (Mindset)
                    และพฤติกรรมของพนักงานทุกระดับในองค์การ
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลงของพนักงานนั้นจะเกิดขึ้นจากความรู้สึกและการรับรู้ที่ไม่มั่นใจ
                  ไม่ปลอดภัย ความกลัว
                  ความหวาดวิตกถึงสถานะของตนเองที่เกิดจากการนำระบบงานใหม่ๆ
                  มาใช้ในองค์การ
                  และจากความรู้สึกนี้เองจึงเป็นเหตุให้พนักงานมีพฤติกรรมการแสดงออกทั้งทางด้านบวกและด้านลบจากการเปลี่ยนแปลงที่เกิดขึ้นในองค์การ
                  พบว่าหลายคนอาจจะเข้าใจผิดคิดว่าการต่อต้านการเปลี่ยนแปลงเป็นพฤติกรรมการแสดงออกที่รุนแรงของพนักงาน
                  เป็นพฤติกรรมที่ปฏิเสธ ไม่ปฏิบัติตาม
                  หรือการชักชวนให้พนักงานคนอื่น ๆ
                  ไม่เห็นด้วยกับการเปลี่ยนแปลงตามไปด้วย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-86-89.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    7 กลยุทธ์ในการเอาชนะการต่อต้านการเปลี่ยนแปลงในสถานที่ทำงาน
                  </Link>
                </p>
                <p>
                  ในโลกทุกวันนี้
                  การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยู่
                  ในธุรกิจก็เช่นเดียวกัน สำหรับพนักงาน
                  การจัดการการเปลี่ยนแปลงอาจเป็นเรื่องยากและน่าหงุดหงิด
                  เมื่อมุ่งมั่นสู่การเปลี่ยนแปลงที่ประสบความสำเร็จ
                  เราต้องพิจารณาถึงการรับรู้ที่แตกต่างกันของผู้ที่ริเริ่มการเปลี่ยนแปลง
                  ผู้ดำเนินการเปลี่ยนแปลง
                  และผู้ได้รับผลกระทบจากการเปลี่ยนแปลงนั้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-90-92.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.pmi.org/learning/library/change-readiness-11126"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิสัยทัศน์และกลยุทธ์การเปลี่ยนแปลงช่วยให้องค์กรมองเห็นภาพอนาคตหลังจากการเปลี่ยนแปลงเกิดขึ้น
                    และทำให้ผู้มีส่วนได้ส่วนเสียในองค์กรทราบว่าเหตุใดพวกเขาจึงควรละทิ้งอดีต
                    เสียสละ และทำงานหนักในปัจจุบัน
                    และเดินตามผู้นำระดับสูงไปสู่อนาคต
                  </Link>
                </p>
                <p>
                  ผู้นำระดับสูงและแนวร่วมจะต้องพัฒนาข้อความที่มีพลังดึงดูดใจเพื่อบอกผู้จัดการและพนักงานว่าอนาคตเป็นสถานที่ที่น่าปรารถนาที่จะก้าวไปเมื่อทำเช่นนี้
                  พวกเขาจะมีโอกาสได้รับความร่วมมือจากผู้อื่นมากขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-93-98.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  <Link
                    href="https://www.popticles.com/branding/how-to-write-effective-vision-statement/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิสัยทัศน์ผลิตภัณฑ์ของคุณคือจุดเริ่มต้น
                    วิสัยทัศน์ช่วยให้คุณสร้างกลยุทธ์ผลิตภัณฑ์
                    ที่มองไปข้างหน้าและขับเคลื่อนโดยลูกค้า
                    ซึ่งให้ความสำคัญกับอนาคตและสร้างแรงบันดาลใจให้ทีมงานทำงานให้ดีที่สุด
                  </Link>
                </p>
                <p>
                  วิสัยทัศน์อาจดูเป็นนามธรรมในตอนแรก
                  แต่จะกลายเป็นจุดยึดที่ช่วยชี้แจงลำดับความสำคัญของคุณได้
                  เมื่อทุกคนในทีมเชื่อมโยงงานของตนเข้ากับความหมายที่ยิ่งใหญ่กว่า
                  ก็จะนำไปสู่ความสอดคล้องและส่งเสริมให้เกิดความรู้สึกผูกพันที่ลึกซึ้งยิ่งขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-99-102.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href="https://simplystakeholders.com/resources/guides/stakeholder-analysis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    บุคลากรภายในและทีมงานทั้งหมดที่โครงการจะเกี่ยวข้องหรือส่งผลกระทบเรียกว่าผู้มีส่วนได้ส่วนเสียการวิเคราะห์ผู้มีส่วนได้ส่วนเสียเป็นกระบวนการระบุบุคคลเหล่านี้ก่อนเริ่มโครงการ
                    จัดกลุ่มตามระดับการมีส่วนร่วม ความสนใจ
                    และอิทธิพลที่มีต่อโครงการ
                    และกำหนดวิธีที่ดีที่สุดในการดึงดูดและสื่อสารกลุ่มผู้มีส่วนได้ส่วนเสียแต่ละกลุ่มเหล่านี้ตลอดโครงการ
                  </Link>
                </p>
                <p>
                  ไม่ว่าจะเป็นผู้จัดการโครงการ ผู้จัดการโปรแกรม
                  หรือผู้จัดการผลิตภัณฑ์
                  ก็สามารถดำเนินการวิเคราะห์ผู้มีส่วนได้ส่วนเสียได้ด้วยเหตุผลเชิงกลยุทธ์หลายประการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-103-106.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href="https://pm-alliance.com/5-strategies-to-persuade-on-the-fence-stakeholders/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    หากคุณได้ทำการวิเคราะห์ผู้มีส่วนได้ส่วนเสียก่อนเริ่มต้น
                    คุณน่าจะระบุผู้บริหารคนนี้ได้ว่าอาจมีความสำคัญต่อความสำเร็จของโครงการของคุณ
                    จากนั้นคุณสามารถนำเสนอแผนของคุณต่อผู้บริหาร
                    รับฟังคำคัดค้านของพวกเขา
                    และดำเนินการเพื่อให้ได้รับอนุมัติให้ดำเนินการต่อไปได้
                  </Link>
                </p>
                <p>
                  การวิเคราะห์ผู้มีส่วนได้ส่วนเสียสามารถเป็นประโยชน์เชิงกลยุทธ์เมื่อต้องเริ่มต้นดำเนินการใดๆ
                  ที่ซับซ้อนในบริษัท
                  ยิ่งคุณสามารถระบุผู้มีส่วนได้ส่วนเสียได้มากตั้งแต่เนิ่นๆ
                  และปรับแต่งการสื่อสารเพื่อให้ได้รับการอนุมัติและการสนับสนุนจากผู้มีส่วนได้ส่วนเสียต่างๆ
                  มากเท่าไร
                  โอกาสที่โครงการของคุณจะประสบความสำเร็จก็ยิ่งมากขึ้นเท่านั้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-107-110.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://standard.dga.or.th/standard/dg-std/5785/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    คณะกรรมการที่ปรึกษาด้านการเปลี่ยนแปลงประกอบด้วยบทบาทที่หลากหลาย
                    โดยแต่ละบทบาทจะนำเสนอมุมมองที่เป็นเอกลักษณ์เฉพาะตัวต่อกระบวนการจัดการการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงมีบทบาทสำคัญในการจัดการความซับซ้อนของการเปลี่ยนแปลงองค์กรในการปฏิบัติตามความรับผิดชอบเหล่านี้
                  คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงช่วยให้องค์กรสามารถผ่านช่วงการเปลี่ยนแปลงได้อย่างราบรื่น
                  โดยการประเมิน การสื่อสาร และการจัดการการเปลี่ยนแปลงอย่างรอบคอบ
                  และมั่นใจได้ว่าการเปลี่ยนแปลงแต่ละครั้งจะส่งผลดีต่อวัตถุประสงค์ขององค์กร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-111-114.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9745710/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    เทคโนโลยีดิจิทัลถูกนำมาใช้กันอย่างแพร่หลายในการดูแลแบบประคับประคองตามปกติและเป็นที่ยอมรับจากบุคลากรทางการแพทย์
                    หน้าที่หลักของเทคโนโลยีดิจิทัลที่พบในการดูแลแบบประคับประคอง
                  </Link>
                </p>
                <p>
                  เทคโนโลยีดิจิทัลถือเป็นส่วนสำคัญในการดูแลแบบประคับประคองทั่วไป
                  แม้ว่าโดยทั่วไปแล้ว
                  บุคลากรทางการแพทย์จะมองว่าเทคโนโลยีดิจิทัลมีประโยชน์
                  แต่เทคโนโลยีดิจิทัลก็ยังมีข้อจำกัดและมีความเสี่ยง ดังนั้น
                  จึงต้องพิจารณาการใช้งานและผลที่ตามมาอย่างรอบคอบ
                  เนื่องจากเทคโนโลยีดิจิทัลควรเสริมแต่ไม่ควรแทนที่ปฏิสัมพันธ์ระหว่างมนุษย์ในการดูแลแบบประคับประคอง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-115-119.pdf"
                  target=" _blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}

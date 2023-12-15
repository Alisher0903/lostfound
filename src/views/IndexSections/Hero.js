import React, {useEffect} from "react";
import {Button, Container, Row, Col} from "reactstrap";

const Hero2 = () => {
    useEffect(() => {
        // Biron bir side effect uchun kerak bo'lsa shu yerga yozing
        // Masalan, component yuklanganda qandaydir bir narsa bajarmoqchi bo'lsangiz
    }, []);

    return (<>
            <div className="position-relative">
                <section className="section section-hero section-shaped">
                    <div className="shape shape-style-1 shape-default">
                        <span className="span-150"/>
                        <span className="span-50"/>
                    </div>
                    <Container className="shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <Row className="align-items-center justify-content-center g-5">
                                <Col className="text-center pr-lg-4" lg="6">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        src={require("assets/img/brand/landf.png")}
                                    />
                                </Col>
                                <Col className="text-center pl-lg-4" lg="6">
                                    <p className="lead text-white">
                                        Lost and Found, o'zini dunyodagi eng yirik global qaytarish kompaniyasi deb
                                        ataydi va u turli ko'chma buyumlarni aniqlash va himoya qilish uchun qaytarish
                                        teglaridan foydalanadi. Bu buyumlar orasida mobil telefonlar, noutbuklar, kalitlar,
                                        yuk sumkalari va uy hayvonlari mavjud. Ularning ma'lumotlariga ko'ra, ular sayt orqali
                                        turli qiymatli buyumlarni teglash va himoya qilish uchun mahsulotlarni
                                        taklif etishadi, shuningdek teglarni faollashtirish, topilgan va yo'qolgan buyumlar
                                        haqida xabar berish bo'yicha ko'rsatmalar mavjud.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0">
                            <polygon className="fill-white" points="2560 0 2560 100 0 100"/>
                        </svg>
                    </div>
                </section>
            </div>
        </>);
};

export default Hero2;

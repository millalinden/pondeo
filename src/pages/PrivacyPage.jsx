import PrivacyDiv from "../components/PrivacyDiv";


export default function PrivacyPage() {
    return (
        <>
            <section className=" bg-deep-black flex flex-col items-center ">
                <h1 className="text-custom-heading-2-uppercase text-neon-green uppercase mt-[50px] mb-[72px]">Privacy Policy</h1>
                <div className="grid grid-cols-2 grid-rows-4 gap-x-[122px] gap-y-[48px] mb-[50px] px-[134px] py[12px]">
                    <PrivacyDiv number={"1."}
                        title={"Introduction"}
                        description={"This Privacy Policy outlines how we collect, use, and protect the information provided by users who submit their email addresses on our landing page, in compliance with the General Data Protection Regulation (GDPR). We are committed to respecting your privacy and safeguarding your personal information. Please read this Privacy Policy carefully to understand our practices and how your information will be handled."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"2."}
                        title={"Information Collection"}
                        description={"When you visit our landing page and submit your email address, we may collect the following information: Email Address: We collect the email address you provide to us voluntarily for the sole purpose of contacting you providing updates related to our products or services."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"3."}
                        title={"Use of Information"}
                        description={"‍We may use the information collected for the following purposes:Communication: We will use your email address to contact you for providing updates related to our products or services."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"4."}
                        title={"Data Security"}
                        description={"‍We take appropriate measures to protect the information provided by you to prevent unauthorized access, disclosure, alteration, or destruction of your personal information. However, please note that no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"5."}
                        title={"Data Retention"}
                        description={"‍We will retain your personal information for as long as necessary to fulfill the purpose of contacting you or providing updates. If you wish to have your email address removed from our records, please contact us."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"6."}
                        title={"Third Party Disclosure"}
                        description={"‍We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to comply with a legal obligation."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"7."}
                        title={"Your Rights"}
                        description={"‍‍Under the GDPR, you have certain rights regarding your personal data. These rights include the right to access, rectify, erase, restrict processing, and object to the processing of your personal information. If you wish to exercise any of these rights, please contact us."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"8."}
                        title={"Updates to this Privacy Policy"}
                        description={"‍‍We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant updates by posting the revised Privacy Policy on our landing page. We encourage you to review this Privacy Policy periodically."}>
                    </PrivacyDiv>
                </div>
            </section>
        </>
    )
}
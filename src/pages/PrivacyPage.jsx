import PrivacyDiv from "../components/PrivacyDiv";


export default function PrivacyPage() {
    return (
        <>
            <section className=" bg-deep-black flex flex-col items-center ">
                <h1 className="text-custom-heading-2-uppercase text-neon-green uppercase mt-[50px] mb-[72px]">Privacy Policy</h1>
                <div className="grid grid-cols-2 grid-rows-3 text-center gap-x-[122px] gap-y-[48px] mb-[50px]">
                    <PrivacyDiv number={"1."}
                        title={"We don't store emails"}
                        description={"We don't store anything against your will."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"2."}
                        title={"We don't store cookies"}
                        description={"We don't store anything against your will."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"3."}
                        title={"We encrypt data"}
                        description={"We don't store anything against your will."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"4."}
                        title={"You can delete data"}
                        description={"We don't store anything against your will."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"5."}
                        title={"We don't sell data"}
                        description={"We don't store anything against your will."}>
                    </PrivacyDiv>
                    <PrivacyDiv number={"6."}
                        title={"We can't access data"}
                        description={"We don't store anything against your will."}>
                    </PrivacyDiv>
                </div>
            </section>
        </>
    )
}
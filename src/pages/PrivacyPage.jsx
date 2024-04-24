import PrivacyDiv from "../components/PrivacyDiv";


export default function PrivacyPage() {
    return (
        <>
            <h1 className="underline font-bold text-3xl text-center mt-10">Privacy Policy</h1>
            <section className=" grid grid-cols-2 grid-rows-3 justify-items-center text-center gap-10 mx-80 my-10 ">
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
            </section>
        </>
    )
}
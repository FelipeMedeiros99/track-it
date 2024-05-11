import trackit from './track-it-text.svg'

export default function BarraTopo({ link_foto }) {
    return (
        <>
            <img src={trackit} alt="track it" />
            <img src={link_foto} alt="foto do usuário" />
        </>
    )
}
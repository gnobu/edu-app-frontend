import IconText from './IconText'

export default function QuestBox({ idx }: { idx: number }) {
    return (
        <aside className="content">
            <div className="quest_box bg-sec flex-col f-gap-1 centered-flex">
                <IconText src="/src/assets/icons/menu-board.svg#img" />
                <span>Question {idx}</span>
            </div>
        </aside>
    )
}

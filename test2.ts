/* req */
const request = {
    "topicId": 5,
    "status": "published" // "draft", "deleted"
}
/* res */
const response = [
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]

type TopicId = string;

enum Status {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted',
}

type Request2 = {
    topicId: TopicId;
    status: Status,
}

type Response2 = {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: Status;
}

async function getFaqs(req: Request2): Promise<Response2[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}

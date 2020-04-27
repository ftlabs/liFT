function simpleMessage(message) {
	return {
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `*${message}*`,
				},
			},
		],
	};
}

function error(error) {
	return {
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'An error was detected',
				},
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `\`\`\`${error}\`\`\``,
				},
			},
		],
	};
}

module.exports = {
	simpleMessage,
	error,
};

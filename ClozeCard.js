function ClozeCard(text, cloze) {
		this.fullText = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, "...");
}

ClozeCard.prototype.checker = function() {
			var n = this.fullText.search(this.cloze);
			if (n === -1) {
			console.log("Error!!!");
			}
}

module.exports = ClozeCard;


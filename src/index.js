"use strict";

module.exports = function (context) {
  var options =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var { Syntax, RuleError, report, getSource } = context;

  const reportResult = (node, message) => {
    report(
      node,
      new RuleError(message, {
        line: 0,
        column: 0,
      })
    );
  };

  let headerNodes = [];
  return {
    [Syntax.Document]() {
      headerNodes = [];
    },
    [Syntax.Header](node) {
      headerNodes.push(node);
    },
    [`${Syntax.Document}:exit`](node) {
      const { children } = node;
      // console.log(node);
      let nextNode = "";
      headerNodes.forEach((node, index) => {
        nextNode = headerNodes[index + 1];
        if (node.depth == 2 && nextNode.raw !== "### 概要") {
          reportResult(node, "タイトルの後に概要がありません。");
        } else if (node.raw === "### 概要" && nextNode.raw !== "### 経験値") {
          reportResult(node, "概要の後に経験値がありません。");
        } else if (node.raw === "### 経験値" && nextNode.raw !== "### 本文") {
          reportResult(node, "経験値の後に本文がありません。");
        } else if (node.raw === "### 本文") {
          // loc: { start: { line: 77, column: 0 }, end: { line: 77, column: 6 } }
          const nowNode = children.findIndex(
            (n) => n.loc.start.line === node.loc.start.line
          );
          // nodeのline ~ ---(HorizontalRule)までに、### 問題があるかどうか
          for (let i = nowNode; i < children.length; i++) {
            if (children[i].raw === "### 問題") {
              break;
            }
            if (children[i].type === "HorizontalRule") {
              // HorizontalRuleがあったら終了
              // TODO: そもそもHorizontalがなかったらエラーが起きないので、Horizontalがレッスンごとに存在しているかルールを作成
              reportResult(node, "本文の後に問題がありません。");
            }
          }
        } else if (node.raw === "### 問題" && nextNode.raw !== "### 解説") {
          reportResult(node, "問題の後に解説がありません。");
        }
      });
    },
  };
};

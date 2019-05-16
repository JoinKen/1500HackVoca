import React, { Component } from 'react';

class ckeEditor extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-info">
                                <div className="box-header">
                                    <p>Bạn hãy tự tạo một đoạn văn chứa những từ ngữ phía trên - Lời khuyên là mỗi từ chỉ dùng một lần và hãy kể một câu chuyện đáng nhớ</p>
                                    <p>Chúc bạn một buổi học thành công! Thoải mái thể hiện ý tưởng của mình nhé.</p>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body pad" style={{}}>
                                    <form>
                                        <textarea id="editor1" name="editor1" rows={20} cols={80} style={{ visibility: 'hidden', display: 'none' }} defaultValue={""} />
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /.col*/}
                    </div>
                    {/* ./row */}
                </section>
            </div>
        );
    }
}

export default ckeEditor;
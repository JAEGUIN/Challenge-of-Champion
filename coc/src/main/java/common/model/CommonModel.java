package common.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CommonModel {

    /**
     * key 번호
     */
    private int seq;

    /**
     * 생성일시 (timestamp)
     */
    private Date createdAt;

    /**
     * 변경일시 (timestamp)
     */
    private Date updatedAt;

    @Override
    public String toString() {
        return "CommonModel{" +
                "seq=" + seq +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}

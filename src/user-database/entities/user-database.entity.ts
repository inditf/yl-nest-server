import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated } from 'typeorm'
@Entity()
export class UserDatabase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20 })
    username: string;

    @Column({ type: "varchar", length: 20 })
    password: string;

    @CreateDateColumn({ type: "timestamp", comment: "创建时间" })
    create_time: Date;
}

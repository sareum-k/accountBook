import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { User } from './User'

@Entity()
export class Goal extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User, user => user.goal_userId)
    user: User

    @Column()
    goal: string

    @Column()
    type: string

    @Column()
    @CreateDateColumn()
    created_at!: Date

    @Column()
    @UpdateDateColumn()
    updated_at!: Date

    @Column()
    @DeleteDateColumn()
    deleted_at!: Date

}

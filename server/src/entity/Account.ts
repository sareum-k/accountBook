import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { User } from './User'

@Entity()
export class Account extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User, user => user.account_userId)
    user: User

    @Column()
    category: string

    @Column()
    payment: string

    @Column()
    type: string

    @Column()
    withdraw: string

    @Column()
    deposit: string

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
